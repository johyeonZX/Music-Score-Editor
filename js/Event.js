//挂载WPS的文档事件
function AddDocumentEvent() {
    // wps.ApiEvent.AddApiEventListener("WindowActivate", OnWindowActivate);
    wps.ApiEvent.AddApiEventListener("DocumentBeforeSave", OnDocumentBeforeSave);
    //wps.ApiEvent.AddApiEventListener("DocumentBeforeClose", OnDocumentBeforeClose);
    wps.ApiEvent.AddApiEventListener("DocumentAfterClose", OnDocumentAfterClose);
    // wps.ApiEvent.AddApiEventListener("DocumentBeforePrint", OnDocumentBeforePrint);
    wps.ApiEvent.AddApiEventListener("DocumentOpen", OnDocumentOpen);
    // wps.ApiEvent.AddApiEventListener("DocumentNew", OnDocumentNew);
    // wps.ApiEvent.AddApiEventListener("WindowSelectionChange", JudgeXMLNode);
    //wps.ApiEvent.AddApiEventListener("WindowBeforeDoubleClick",consolelog);

    console.log("AddDocumentEvent");
}

function OnDocumentOpen(doc) {
    if (!doc)
        doc = wps.WpsApplication().ActiveDocument;

    console.log("open", doc.Name);
    let PluginStatus = MSE.getValue("workStatus");
    console.log("PluginStatus", PluginStatus);
    if (PluginStatus) {
        alert("正在编辑乐谱文件，请关闭已打开的乐谱");
        doc.Bookmarks.Item("Muscore").Delete();
        doc.Close(0);
    }

    //判断是否乐谱文件
    var isMu = checkIsMuFile(doc);
    if (isMu) {
        MSE.setValue("PlayStatus", 0);
        wps.ribbonUI.Invalidate();
        MSE.sendPianoCommand("stop");

        var app = wps.WpsApplication();
        app.ActiveDocument.Unprotect("passW0rd"); //先解锁然后操作

        var song = new fakeSong(JSON.parse(wps.WpsApplication().ActiveDocument.Bookmarks.Item("song").Range.Text));
        var JPcode = wps.WpsApplication().ActiveDocument.Bookmarks.Item("JPcode").Range.Text.replace(/\[huanhang\]/g, "\n");

        app.ActiveDocument.Range().Select();
        app.ActiveWindow.Selection.Range.Delete();
        app.Selection.Range.InsertFile(common.getFullURL("templates/TitleTemplate.docx", true));
        app.Selection.WholeStory();
        app.Selection.EndKey();
        //重新激活页签 linux 插入文件导致页签变动
        activeTab();

        //触发
        MSE.setValue("song", song);
        MSE.setValue("JPcode", JPcode);
        MSE.setValue("oldJPcode", "");
        MSE.setValue("JPcodeChangeInfo", { "version": new Date().getTime(), "CmdNo": 0 });
        wps.PluginStorage.setItem("editorCommand", "refreshEditor");    //刷新编辑器
        MSE.song.Header.setValue2Wps(); //乐谱信息填充
        setTimeout(() => {
            MSE.alertWaitBox();
        }, 300);
        MSE.setValue("workStatus", true);   //修改插件状态
    }
}

// 当文件保存前触发的事件
function OnDocumentBeforeSave(doc) {
    if (!checkIsMSETemp(doc))
        return

    // wps.ApiEvent.Cancel = true;
}

// 关闭后事件
function OnDocumentAfterClose(doc) {
    //判断是否乐谱文件
    var isMu = checkIsMuFile(doc);
    if (isMu)
        MSE.setValue("workStatus", false);   //修改插件状态

    //清理mid文件缓存
    if (doc.Path != "") {
        if (!checkIsMSETemp(doc))
            //很重要 不然publish模式下开一个删一个。。。
            return
        let path = doc.Path + "\\" + doc.Name;
        path = path.replace(/\\/g, "/"); /** g-全部 **/

        //要先close才能删除
        doc.Close();
        wps.FileSystem.Remove(path);
    }
}

// 检测当前文档是否MSETEMP缓存目录
function checkIsMSETemp(doc) {
    if (!doc)
        doc = wps.WpsApplication().ActiveDocument;

    var path = doc.Path;
    if (path && (path.indexOf("MSETEMP") != -1))
        return true

    return false;
}

// 检测当前文档是否音乐文件
function checkIsMuFile(doc) {
    if (!doc || !doc.Bookmarks)
        return false;
    var isMuscore = wps.WpsApplication().ActiveDocument.Bookmarks.Item("Muscore");
    return !!isMuscore;
}

function activeTab() {
    wps.ribbonUI.ActivateTab("musicEditTab");
}