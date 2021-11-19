//初始化
$(document).ready(function () {
    init()
});

function init() {
    var app = wps.WpsApplication();
    var doc = wps.WpsApplication().ActiveDocument;

    if (!wps.WpsApplication().ActiveDocument.Bookmarks.Item("Muscore")) {
        alert("非乐谱文件，无法进行页面编辑")
        closePage();
        return
    }

    var pageInfo = {
        pageSize: {
            name: "",
            width: 0,
            height: 0
        },
        LineHeight: 0,
        padding: {
            pad_top: 0,
            pad_left: 0,
            pad_right: 0,
            pad_bottom: 0,
        },
        font: {
            font_Style: "",
            fontSize_title1: 0,
            fontSize_title2: 0
        }
    }

    var p = pageInfo;
    //纸张大小识别
    p.pageSize.width = common.floatFormat(app.PointsToCentimeters(doc.PageSetup.PageWidth));
    p.pageSize.height = common.floatFormat(app.PointsToCentimeters(doc.PageSetup.PageHeight));
    if ("13|14|15".includes(Math.floor(p.pageSize.width)))
        p.pageSize.name = "A5"
    else if ("19|20|21".includes(Math.floor(p.pageSize.width)))
        p.pageSize.name = "A4"
    else
        p.pageSize.name = "custom"
    //内容上边距识别
    var table = wps.WpsApplication().ActiveDocument.Tables.Item(1);
    p.LineHeight = common.floatFormat(app.PointsToCentimeters(Number(table.Cell(4, 1).Row.Height)));
    //页边距识别 磅转cm
    p.padding.pad_top = common.floatFormat(app.PointsToCentimeters(doc.PageSetup.TopMargin));
    p.padding.pad_left = common.floatFormat(app.PointsToCentimeters(doc.PageSetup.LeftMargin));
    p.padding.pad_right = common.floatFormat(app.PointsToCentimeters(doc.PageSetup.RightMargin));
    p.padding.pad_bottom = common.floatFormat(app.PointsToCentimeters(doc.PageSetup.BottomMargin));
    //字体识别
    var bkfont_B1 = doc.Bookmarks.Item("B1").Range.Font;
    var bkfont_B2 = doc.Bookmarks.Item("B2").Range.Font;
    p.font.font_Style = bkfont_B1.Name;
    p.font.fontSize_title1 = bkfont_B1.Size;
    p.font.fontSize_title2 = bkfont_B2.Size;

    wps.PluginStorage.setItem("pageInfo", JSON.stringify(pageInfo));

    $("#pageSize").val(p.pageSize.name);
    $("#LineHeight").val(p.LineHeight);
    $("#pad_top").val(p.padding.pad_top);
    $("#pad_left").val(p.padding.pad_left);
    $("#pad_right").val(p.padding.pad_right);
    $("#pad_bottom").val(p.padding.pad_bottom);
    $("#font_Style").val(p.font.font_Style);
    $("#fontSize_title1").val(p.font.fontSize_title1);
    $("#fontSize_title2").val(p.font.fontSize_title2);
}

//纸张大小设置
function resetPage() {
    var app = wps.WpsApplication();
    var doc = wps.WpsApplication().ActiveDocument;

    if (!wps.WpsApplication().ActiveDocument.Bookmarks.Item("Muscore")) {
        alert("非乐谱文件，无法进行页面编辑")
        closePage();
        return
    }

    app.ScreenUpdating = false; //停止刷新
    app.ActiveDocument.Unprotect("passW0rd"); //先解锁然后操作

    var pageInfo = {
        pageSize: {
            name: $("#pageSize").val(),
            width: 0,
            height: 0
        },
        LineHeight: Number($("#LineHeight").val()),
        padding: {
            pad_top: Number($("#pad_top").val()),
            pad_left: Number($("#pad_left").val()),
            pad_right: Number($("#pad_right").val()),
            pad_bottom: Number($("#pad_bottom").val()),
        },
        font: {
            font_Style: $("#font_Style").val(),
            fontSize_title1: Number($("#fontSize_title1").val()),
            fontSize_title2: Number($("#fontSize_title2").val())
        }
    }

    var p = pageInfo;
    //纸张大小设置
    switch (p.pageSize.name) {
        case "A4":
            p.pageSize.width = 595.2999877929688
            p.pageSize.height = 841.9000244140625
            break;
        case "A5":
            p.pageSize.width = 419.5
            p.pageSize.height = 595.25
            break;
    }
    doc.PageSetup.PageHeight = p.pageSize.height;
    doc.PageSetup.PageWidth = p.pageSize.width;
    //内容上边距设置
    var table = wps.WpsApplication().ActiveDocument.Tables.Item(1);
    table.Cell(4, 1).Row.Height = app.CentimetersToPoints(p.LineHeight);
    //页边距 cm转磅
    doc.PageSetup.TopMargin = app.CentimetersToPoints(p.padding.pad_top);
    doc.PageSetup.LeftMargin = app.CentimetersToPoints(p.padding.pad_left);
    doc.PageSetup.RightMargin = app.CentimetersToPoints(p.padding.pad_right);
    doc.PageSetup.BottomMargin = app.CentimetersToPoints(p.padding.pad_bottom);
    //字体设置
    var font = { family: p.font.font_Style, size: p.font.fontSize_title1, color: null };
    common.rangeSetFont(doc.Bookmarks.Item("B1").Range, font);
    var font = { family: p.font.font_Style, size: p.font.fontSize_title2, color: null };
    common.rangeSetFont(doc.Bookmarks.Item("B2").Range, font);
    // common.rangeSetFont(doc.Bookmarks.Item("Z1").Range, font);
    // common.rangeSetFont(doc.Bookmarks.Item("Z2").Range, font);

    wps.PluginStorage.setItem("pageInfo", JSON.stringify(pageInfo));

    app.ActiveDocument.Protect(3, false, "passW0rd");

    //！！为了让每个符号位置重构，强制重新渲染脚本
    var JPcode = wps.PluginStorage.getItem("JPcode");				//脚本代码
    var JPcodeChangeInfo = {};	//脚本改变信息(用于传递给WPS_MSE)
    var newLineNum = JPcode.split(/\n/).length;
    JPcodeChangeInfo["version"] = new Date().getTime();
    JPcodeChangeInfo["CmdNo"] = 0;
    JPcodeChangeInfo["force"] = true;
    wps.PluginStorage.setItem('JPcode', JPcode);
    wps.PluginStorage.setItem('JPcodeChangeInfo', JSON.stringify(JPcodeChangeInfo));

    wps.PluginStorage.setItem('MSEcommand', "alertWait");
    closePage();
}

function closePage() {
    window.close()
}