function OnAddinLoad(ribbonUI) {
    if (typeof (wps.ribbonUI) != "object") {
        wps.ribbonUI = ribbonUI
    }

    if (typeof (wps.Enum) != "object") { // 如果没有内置枚举值
        wps.Enum = WPS_Enum
    }

    MSE.setValue("PlayStatus", 0);
    wps.WpsApplication().FileDialog(2).Filters.Add("MuScore 乐谱文件", "*.muscr");   //添加文件类型

    //初始化监听事件
    AddDocumentEvent();
    return true
}

function OnAction(control) {
    const eleId = control.Id
    if (!MSE.piano) {
        createPianoPane();
    }
    switch (eleId) {
        case "btn_newMuScore":
            {
                MSE.newMuScore();
            }
            break;
        case "btn_importMuScore":
            {
                MSE.selectMusicScore();
            }
            break;
        case "btn_exportMuScore":
            {
                MSE.outputMusicScore();
            }
            break;
        case "btn_transToPDF":
            {
                MSE.transToPDF();
            }
            break;
        case "btn_transToOFD":
            {
                MSE.transToOFD();
            }
            break;
        case "btn_myMuScore":
            {
                MSE.showMyMusicPane();
            }
            break;
        case "btn_openMidiFile":
            {
                MSE.selectMidiFile();
            }
            break;
        case "btn_play":
            {
                if (MSE.midiUrl) {
                    MSE.setValue("PlayStatus", MSE.midiUrl ? 1 : 0);
                    wps.ribbonUI.Invalidate();
                    MSE.sendPianoCommand("play");
                    console.log("play Mid Start");
                } else if (MSE.checkIsMuscr()) {
                    MSE.setValue("PlayStatus", 1);
                    wps.ribbonUI.Invalidate();
                    MSE.playMuscr("playMuscr");
                    console.log("play Muscr Start");
                } else {
                    //没选择文件,无法开始播放
                    wps.alert("未选择mid文件，或当前文件不是乐谱文件，无法播放");
                }
            }
            break;
        case "btn_pause":
            {
                MSE.setValue("PlayStatus", 2);
                wps.ribbonUI.Invalidate();
                MSE.sendPianoCommand("pause");
            }
            break;
        case "btn_stop":
            {
                MSE.setValue("PlayStatus", 0);
                wps.ribbonUI.Invalidate();
                MSE.sendPianoCommand("stop");
            }
            break;
        case "btn_MuSetting":
            {
                wps.ShowDialog(common.getFullURL("ui/MuHeaderSetting.html?type=reset"), "简谱设置", 455, 208);
            }
            break;
        case "btn_pageSet":
            {
                wps.ShowDialog(common.getFullURL("ui/pageSetting.html"), "页面设置", 459, 315);
            }
            break;
        case "btn_code":
            {
                if (MSE.Editor)
                    MSE.sendEditorCommand("close");
                MSE.Editor = wps.ShowDialog(common.getFullURL("js/MSE/codeEdit/codeEditor.html"), "脚本编辑", 888, 288, false);
            }
            break;
        case "btn_piano":
            {
                if (MSE.piano) {
                    MSE.piano.Visible = MSE.piano.Visible ? false : true;
                }
            }
            break;
        case "btn_pianoToKeybord":
            {
                wps.ShowDialog(common.getFullURL("ui/pianoHelp.html"), "keyBord对照表 中央C：Q", 1000, 355, false);
            }
            break;
        default:
            break
    }
    return true
}

function GetImage(control) {
    const eleId = control.Id
    switch (eleId) {
        case "btn_newMuScore":
            return "images/icons/file-empty.svg"
        case "btn_importMuScore":
            return "images/icons/folder-import.svg"
        case "btn_exportMuScore":
            return "images/icons/folder-export.svg"
        case "btn_transToPDF":
            return "images/icons/file-pdf.svg"
        case "btn_transToOFD":
            return "images/icons/file-ofd.svg"
        case "btn_myMuScore":
            return "images/icons/myMuScore.svg"
        case "btn_openMidiFile":
            return "images/icons/folder-open.svg"
        case "btn_play":
            return "images/icons/play.svg"
        case "btn_pause":
            return "images/icons/pause.svg"
        case "btn_stop":
            return "images/icons/stop.svg"
        case "btn_MuSetting":
            return "images/icons/music.svg"
        case "btn_pageSet":
            return "images/icons/page-setting.svg"
        case "btn_code":
            return "images/icons/coding.svg"
        case "btn_piano":
            return "images/icons/piano.svg"
        case "btn_pianoToKeybord":
            return "images/icons/help.svg"
        case "btn_aboutUs":
            return "images/icons/about.svg"
        default:
            break
    }
    return ""
}

function OnGetEnabled(control) {
    const eleId = control.Id
    switch (eleId) {
        case "btn_importMuScore":
            return getPlayBtnStatus(eleId);
        case "btn_openMidiFile":
            return getPlayBtnStatus(eleId);
        case "btn_play":
            return getPlayBtnStatus(eleId);
        case "btn_pause":
            return getPlayBtnStatus(eleId);
        case "btn_stop":
            return getPlayBtnStatus(eleId);
        case "btn_pianoToKeybord":
            return true
        default:
            break
    }
    return true
}

function OnGetVisible(control) {
    const eleId = control.Id
    switch (eleId) {
        case "btn_openMidiFile":
            return false
        default:
            return true
    }
}

function OnGetLabel(control) {
    const eleId = control.Id
    switch (eleId) {
        case "ttt":
            {
                let bFlag = wps.PluginStorage.getItem("EnableFlag")
                return bFlag ? "按钮Disable" : "按钮Enable"
                break
            }
    }
    return ""
}



function getPlayBtnStatus(btnName) {
    var PlayStatus = MSE.getValue("PlayStatus");
    switch (PlayStatus) {
        case 0: //停止状态可点击的
            return "btn_importMuScore|btn_openMidiFile|btn_play|".includes(btnName)
        case 1: //播放状态可点击的
            return "btn_pause|btn_stop|".includes(btnName)
        case 2: //暂停状态可点击的
            return "btn_play|btn_stop|".includes(btnName)
    }
}

//初始化taskPane for piano
function createPianoPane() {
    if (!wps.GetTaskPane(1) || (wps.GetTaskPane(1).ID == -1)) {
        MSE.piano = wps.CreateTaskPane(common.getFullURL("js/piano/index.html"), "Piano Player");
        // MSE.piano = wps.CreateTaskPane("http://192.168.0.27:8080/", "Piano Player");
        // MSE.piano.Visible = true;
        MSE.piano.DockPosition = 3
        if (common.detectOS() == "Linux") {
            MSE.piano.Height = 248
        }
    } else {
        //兼容Linux 原先已经有一个taskpane
        MSE.piano = wps.GetTaskPane(1);
        // MSE.piano.Visible = true;
        MSE.piano.DockPosition = 3
        if (common.detectOS() == "Linux") {
            MSE.piano.Height = 248
        }
    }
    return MSE.piano;
}
