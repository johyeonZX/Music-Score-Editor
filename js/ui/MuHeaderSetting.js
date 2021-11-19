//初始化
$(document).ready(function () {
    init()
});

function init() {
    var type = common.getWindowParam("type");
    var app = wps.WpsApplication();
    var doc;

    if (type == "reset") {
        doc = wps.WpsApplication().ActiveDocument;
        if (!doc.Bookmarks.Item("Muscore")) {
            alert("非乐谱文件，无法进行简谱设置")
            closePage();
            return
        }

        var song = new fakeSong(JSON.parse(wps.PluginStorage.getItem("song")));
        var header = new fakeSongHeader(song.Header);

        $("#B1").val(header.B1);
        $("#B2").val(header.B2);
        $("#Z2").val(header.Z2);
        $("#D").val(header.D);
        $("#Pn").val(header.P.n);
        $("#Pd").val(header.P.d);
        $("#J").val(header.J);
        $("#TrackNum").val(song.tracks.length);

        $("#TrackSetting").css("visibility", "hidden");
    }
}

//设置乐谱信息
function resetMuHeader() {
    var type = common.getWindowParam("type");
    var app = wps.WpsApplication();
    var doc;

    if (type == "new") {
        var oldDoc = app.ActiveDocument;
        var doc = app.Documents.Add();
        if (oldDoc.Path)
            oldDoc.Save();
        oldDoc.Close(0);
        doc.Range.Text = "";
        app.Selection.Range.InsertFile(common.getFullURL("templates/TitleTemplate.docx", true));
        app.Selection.WholeStory();
        app.Selection.EndKey();
        //重新激活页签 linux 插入文件导致页签变动
        activeTab();
    }

    var info = {};
    info.B1 = $("#B1").val();
    info.B2 = $("#B2").val();
    info.Z2 = $("#Z2").val();
    info.D = $("#D").val();
    info.P = new Fraction(Number($("#Pn").val()), Number($("#Pd").val()));
    info.J = Number($("#J").val());
    info.noteType = new Fraction(1, Number($("#Pd").val()));
    var header = new fakeSongHeader(info);


    // PluginStorage传递方法是用来set到WPS主页面中去
    if (type == "new") {

        var trackNum = Number($("#TrackNum").val());
        // 刷新脚本编辑器
        // var JPcode = "#================Header================\n"
        //     + "B1:" + header.B1 + "\n"
        //     + "B2:" + header.B2 + "\n"
        //     + "Z2:" + header.Z2 + "\n"
        //     + "D:" + header.D + "\n"
        //     + "P:" + header.P.n + "/" + header.P.d + "\n"
        //     + "J:" + header.J + "\n"
        //     + "#================MuBody================\n"
        //     + "Q:" + "\n"
        var JPcode = "#================MuBody================\n";
        switch (trackNum) {
            case 1:
                // JPcode += ("Q: 1 1 5 5 | 6 6 5 - | 4 4 3 3 | 2 2 1 -" + "\n");
                JPcode += ("Q: 5 3/ 5/ 1' - | 6 1' 5 - | 5 1/ 2/ 3 2/ 1/ | 2 - 0 0" + "\n");
                break;
            default:
                JPcode += ("Q1: 1 1 5 5 | 6 6 5 - | 4 4 3 3 | 2 2 1 -" + "\n");
                JPcode += ("Q2: 1/, 3/, 5/, 3/, 1/, 3/, 5/, 3/, | 2/, 4/, 6/, 4/, 1/, 3/, 5/, 3/, | 2/, 4/, 6/, 4/, 1/, 3/, 5/, 3/, | 2/, 4/, 6/, 4/, 1/, 3/, 5/, 3/," + "\n");
                for (let i = 3; i < trackNum; i++) {
                    JPcode += ("Q" + i + ":" + "\n");
                }
                break;
        }
        app.Selection.EndKey();
        app.Selection.Range.InsertFile(common.getFullURL("templates/Q_TrackLine_" + trackNum + ".docx", true));
        app.Selection.EndKey();

        var song = new fakeSong({ "Header": header });
        for (let i = 0; i < trackNum; i++) {
            song.createTrack({});
        }
        wps.PluginStorage.setItem("song", JSON.stringify(song));
        wps.PluginStorage.setItem("MSEcommand", "newSong");

        wps.PluginStorage.setItem("JPcode", JPcode);    //简谱代码
        wps.PluginStorage.setItem('JPcodeChangeInfo', JSON.stringify({ "version": new Date().getTime() }));   //简谱代码版本号
        wps.PluginStorage.setItem("editorCommand", "refreshEditor");    //刷新编辑器
        common.SetBookMark("JPcode", "text", JPcode);   //这里把初始化脚本也放一下,写入书签
    } else if (type == "reset") {
        wps.PluginStorage.setItem("songHeader", JSON.stringify(header));
        wps.PluginStorage.setItem("MSEcommand", "setSongHeader");
    }

    closePage();
}

function closePage() {
    window.close()
}
function activeTab() {
    wps.ribbonUI.ActivateTab("musicEditTab");
}