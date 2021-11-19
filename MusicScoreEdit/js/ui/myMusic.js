var data = Array();   //数据
let path = wps.Env.GetTempPath() + "/MSE_MyMusic/"; //默认存档路径

//初始化
$(document).ready(function () {
    init();
    Array.prototype.findByObjKey = function (key) {
        return data.findIndex(x => x[key]);
    }
});

function init() {
    data = getCfgJSON();
    let html = "";
    if (data.length == 0) {
        html = "<td>无收藏文件</td><td>null</td>";
    }
    data.forEach(d => {
        let Id = Math.ceil(Math.random() * 1234567890).toString(); //生成随机id
        html += "<tr>";
        for (const key in d) {
            html += "<td id=\"fn_" + Id + "\" name=\"" + key + "\" fileUrl=\"" + d[key] + "\">" + key + "</td>";
            html += "<td id=\"fb_" + Id + "\">"
                + "<button class=\"buttonS btn_open\">打开</button>"
                + "<button class=\"buttonS btn_delete\">删除</button>"
                + "</td>";
        }
        html += "</tr>";
    });
    $(".Mu_list tbody").html(html);

    $(".btn_open").bind("click", function (e) {
        doOpen(e);
    });

    $(".btn_delete").bind("click", function (e) {
        doDelete(e)
    });
}

function saveActivedocToCfg() {
    if (!checkIsMuscr()) {
        alert("当前文件非乐谱文件，无法进行收藏");
        return;
    }

    let doc = wps.WpsApplication().ActiveDocument;
    let songHeader = JSON.parse(wps.PluginStorage.getItem("song")).Header;
    let filesPath = path + "files/";
    if (!wps.FileSystem.Exists(filesPath))
        wps.FileSystem.Mkdir(filesPath);

    let outUrl = filesPath + "《" + songHeader["B1"] + "》_" + common.dateFormat("yyyy-MM-dd", new Date()) + ".muscr";
    doc.SaveAs2(outUrl);

    let obj = {}, index;
    index = data.findByObjKey(songHeader["B1"]);
    obj[songHeader["B1"]] = outUrl;
    if (index === -1)
        data.push(obj);
    else
        data[index] = obj;
    writeCfgFile({ "data": data });

    init();
}

function refreshList() {
    init();
}

function doOpen(e) {
    let ele = e.target.parentElement;
    let flag = ele.id.replace(/fb_/g, "fn_");
    let sel_fileUrl = $("#" + flag).attr("fileUrl");
    if (!wps.FileSystem.Exists(sel_fileUrl)) {
        alert("乐谱《" + $("#" + flag).attr("name") + "》不存在。 fileUrl:\r\n" + sel_fileUrl);
        return;
    }

    //检测是否打开
    let docs = wps.WpsApplication().Documents;
    for (let i = 1; i <= docs.Count; i++) {
        let doc = docs.Item(i);
        if (sel_fileUrl == doc.FullName.replace(/\\/g, "/")) {
            alert("该文件已被打开，不可重复打开");
            return;
        }
    }

    let oldDoc = wps.WpsApplication().ActiveDocument;
    wps.PluginStorage.setItem("workStatus", false);   //修改插件状态
    wps.WpsApplication().Documents.Open(sel_fileUrl);   //新打开一个
    if (oldDoc.path)
        oldDoc.Save();
    setTimeout(() => {
        oldDoc.Close(0);
    }, 369);
    activeTab();
}

function doDelete(e) {
    let ele = e.target.parentElement;
    let flag = ele.id.replace(/fb_/g, "fn_");
    let sel_fileUrl = $("#" + flag).attr("fileUrl");
    let f_Name = $("#" + flag).attr("name");
    let docs = wps.WpsApplication().Documents;

    //检测是否打开
    for (let i = 1; i <= docs.Count; i++) {
        let doc = docs.Item(i);
        if (sel_fileUrl == doc.FullName.replace(/\\/g, "/")) {
            if (!wps.confirm("该文件已被打开，是否关闭且删除?"))
                return;
            else
                doc.Close(0);
        }
    }

    let index = data.findByObjKey(f_Name);
    data.remove(index);
    writeCfgFile({ "data": data });

    if (!wps.FileSystem.Exists(sel_fileUrl)) {
        alert("乐谱《" + $("#" + flag).attr("name") + "》不存在。 fileUrl:\r\n" + sel_fileUrl);
        init();
        return;
    }

    wps.FileSystem.Remove(sel_fileUrl);
    init();
}

/**
 * -----json格式-----
 *  {"data":[
 *     {"neme":"fileUrl"},
 *     {"小星星":"c:/xxx.muscr"}
 *     ...
 *  ]}
 */
function getCfgJSON() {
    let cfgJson = JSON.parse(readCfgFile());
    let data = cfgJson.data;
    return data;
}

function readCfgFile() {
    let cfgPath = path + "cfg.json";
    let cfgJson;
    if (!wps.FileSystem.Exists(path))
        wps.FileSystem.Mkdir(path);
    if (wps.FileSystem.Exists(cfgPath))
        cfgJson = common.Base64.decode(wps.FileSystem.readAsBinaryString(cfgPath)); // readAsBinaryString兼容linux base64处理乱码问题
    if (!cfgJson) {
        cfgJson = JSON.stringify({ "data": [] });
        wps.FileSystem.writeAsBinaryString(cfgPath, common.Base64.encode(cfgJson));
    }
    return cfgJson;
}

function writeCfgFile(json) {
    let cfgPath = path + "cfg.json";
    let cfgJson;
    if (!wps.FileSystem.Exists(path))
        wps.FileSystem.Mkdir(path);
    cfgJson = JSON.stringify(json ? json : { "data": [] });
    wps.FileSystem.writeAsBinaryString(cfgPath, common.Base64.encode(cfgJson));
}

function checkIsMuscr() {
    if (!wps.WpsApplication().ActiveDocument || !wps.WpsApplication().ActiveDocument.Bookmarks)
        return false;
    var isMuscore = wps.WpsApplication().ActiveDocument.Bookmarks.Item("Muscore");
    return !!isMuscore;
}

function activeTab() {
    wps.ribbonUI.ActivateTab("musicEditTab");
}
