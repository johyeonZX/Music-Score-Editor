((w) => {
    if (w.MSE)
        return

    w.MSE = {
        /** 工具状态 **/
        workStatus: false,          //插件工作状态 false闲置 true乐谱编辑状态
        PlayStatus: 0,              //播放状态 0停止 1播放 2暂停
        MScoreUrl: "",              //乐谱文件路径
        midiUrl: "",                //midi文件路径
        Editor: null,               //编辑器
        editorCommand: "",          //编辑器指令
        piano: null,                //钢琴面板
        pianoCommand: "",           //钢琴指令 用于wps调用taskpane  play/pause/stop
        song: null,                 //歌曲类
        JPcode: "",                 //简谱脚本
        JPcodeChangeInfo: "",       //简谱脚本最新修改信息  {version:xxx,CmdNo:LineNo(行号)}
        oldJPcode: "",              //上次简谱脚本
        oldQMax: 0,                 //原先最大脚本行（不包括无效行）
        oldJPcodeChangeInfo: { "version": 0, "CmdNo": 0 },    //简谱脚本上次修改信息

        /** 基础方法 **/
        getValue: (name) => {
            return wps.PluginStorage.getItem(name);
        },
        setValue: (name, val) => {
            if (!MSE.setValueBlackList.includes(name))
                w.MSE[name] = val;
            wps.PluginStorage.setItem(name, typeof (val) == "object" ? JSON.stringify(val) : val);
        },
        resetMSE: () => {
            MSE.setValue("oldJPcode", "");
            MSE.setValue("oldQMax", 0);
        },
        //以下属性不会插入到MSE中
        setValueBlackList: [
        ],

        /** ribbon对应的代码 **/
        newMuScore: () => {
            wps.ShowDialog(common.getFullURL("ui/MuHeaderSetting.html?type=new"), "简谱设置", 455, 208);
        },
        selectMusicScore: () => {
            var MScoreUrl = common.selectFile(3, "导入乐谱");
            if (!MScoreUrl)
                return
            MSE.setValue("MScoreUrl", MScoreUrl);

            var oldDoc = wps.WpsApplication().ActiveDocument;
            var newDoc = wps.WpsApplication().Documents.Open(MScoreUrl);
            oldDoc.Close(0);    //wdDoNotSaveChanges=0 不保存
            MSE.activeTab();
        },
        outputMusicScore: () => {
            var app = wps.WpsApplication();
            var doc = app.ActiveDocument;
            if (!MSE.checkIsMuscr()) {
                alert("不是音乐文件，不能导出为*.muscr");
                return;
            }
            var oldPath = doc.FullName;
            var outputUrl = common.selectFile(2, "导出乐谱");
            if (outputUrl) {
                if (doc.Path) {
                    var oldDoc = app.ActiveDocument;
                    oldDoc.Save();
                    doc.SaveAs2(outputUrl);
                    doc = app.Documents.Open(oldPath);
                    oldDoc.Close(0);
                } else {
                    doc.SaveAs2(outputUrl);
                }
            }
        },
        transToPDF: () => {
            var app = wps.WpsApplication();
            var doc = app.ActiveDocument;
            if (common.detectOS() == "Linux") {
                //兼容Linux 直接用导出
                wps.WpsApplication().CommandBars.ExecuteMso("FileSaveAsPdfOrXps");
                return;
            }
            var outputUrl = common.selectFile(2, "导出PDF", 20);
            if (outputUrl) {
                if (doc.Path)
                    doc.Save();
                doc.ExportAsFixedFormat(outputUrl, 17, true);
            }
        },
        transToOFD: () => {
            var app = wps.WpsApplication();
            var doc = app.ActiveDocument;
            if (common.detectOS() == "Linux") {
                //兼容Linux 直接用导出
                wps.WpsApplication().CommandBars.ExecuteMso("FileOfdPrintMenu");
                return;
            }
            var outputUrl = common.selectFile(2, "导出OFD", 19);
            if (outputUrl) {
                var oldPath = doc.Path;
                var oldFullName = doc.FullName;
                if (oldPath)
                    doc.Save();
                doc.ExportAsFixedFormat(outputUrl, 23, true);
                doc.SaveAs2(outputUrl, 102);
                if (oldPath)
                    doc.SaveAs2(oldFullName); //保存回原来的文档内容
            }
        },
        /**
         * 我的乐谱
         * @param {boolean} visible  可视
         */
        showMyMusicPane: (visible) => {
            if (MSE.myMusic) {
                MSE.myMusic.Visible = !MSE.myMusic.Visible;
                return;
            }
            if (!wps.GetTaskPane(2) || (wps.GetTaskPane(2).ID == -1)) {
                MSE.myMusic = wps.CreateTaskPane(common.getFullURL("ui/myMusic.html"), "我的乐谱");
                MSE.myMusic.DockPosition = 0
                MSE.myMusic.Visible = true;
                MSE.myMusic.Width = 369
            } else {
                //兼容Linux 原先已经有一个taskpane
                MSE.myMusic = wps.GetTaskPane(2);
                MSE.myMusic.DockPosition = 0
                MSE.myMusic.Visible = true;
                MSE.myMusic.Width = 369
            }
        },
        selectMidiFile: () => {
            var midiUrl = common.selectFile(3);
            if (!midiUrl)
                return
            if (!midiUrl.includes(".mid")) {
                alert("文件无法解析，请选择mid音乐文件");
                MSE.setValue("midiUrl", "");
                return
            }
            MSE.setValue("midiUrl", midiUrl);

            var path = wps.Env.GetTempPath() + "/MSETEMP/";
            if (!wps.FileSystem.Exists(path)) {
                wps.FileSystem.Mkdir(path);
            }

            var doc = wps.WpsApplication().ActiveDocument;
            var name = midiUrl.substring(midiUrl.lastIndexOf("\\") + 1);
            name = name.substring(0, name.lastIndexOf("."));
            doc.SaveAs2($FileName = path + name + ".wps", undefined, undefined, undefined, false);
        },
        //播放 Muscr文件
        playMuscr: () => {
            MSE.setValue("pianoObj", MSE.song.trans2PianoRead());
            MSE.sendPianoCommand("playMuscr");
        },

        /** 其他代码 **/
        activeTab: () => {
            wps.ribbonUI.ActivateTab("musicEditTab");
        },
        checkIsMuscr: () => {
            if (!wps.WpsApplication().ActiveDocument || !wps.WpsApplication().ActiveDocument.Bookmarks)
                return false;
            var isMuscore = wps.WpsApplication().ActiveDocument.Bookmarks.Item("Muscore");
            return !!isMuscore;
        },
        WriteSongToFile: () => {
            common.SetBookMark("song", "text", JSON.stringify(MSE.song));
        },
        WriteCodeToFile: () => {
            common.SetBookMark("JPcode", "text", MSE.JPcode.replace(/\n/g, "[huanhang]"));
        },
        alertWaitBox: () => {
            wps.ShowDialog(common.getFullURL("ui/wait.html"), "正在渲染", 900, 500);
        },

        /** 以下是多个页面用于互相传递命令的代码 **/
        //传递命令至钢琴页面
        sendPianoCommand: (c) => {
            MSE.setValue("pianoCommand", c);
        },
        //传递命令至编辑器
        sendEditorCommand: (c) => {
            MSE.setValue("editorCommand", c);
        },
        //MSEcommand 用来接收其他页面传递的命令 
        //_0、这里有个小bug window下如果有setInterval，同时初始化taskpane，图标加载就会很卡，且windows下无法移动开发者工具
        //_1、为了工具栏更快加载，在main.js中延时触发该函数
        //_2、2021-9-8 interval改为timeout方法 自定义interval
        createCommandInterval: (w) => {
            w.commandInterval = () => {
                setTimeout(() => {
                    w.commandInterval();    //一开始就得调用下次的timeout 别return了
                    var command = wps.PluginStorage.getItem("MSEcommand");
                    if (!command) return;
                    MSE.clearMSEcommand();
                    console.log("MSEcommand = ", command);

                    var app = wps.WpsApplication();
                    app.ActiveDocument.Unprotect("passW0rd"); //先解锁然后操作
                    switch (command) {
                        case "pianoFinish":
                            MSE.setValue("PlayStatus", 0);
                            wps.ribbonUI.Invalidate();
                            break;
                        case "newSong":
                            MSE.resetMSE();
                            MSE.setValue("song", new fakeSong(JSON.parse(MSE.getValue("song"))));
                            MSE.song.Header.setValue2Wps(); //乐谱信息填充
                            //把Song类写入song书签
                            MSE.WriteSongToFile();
                            break;
                        case "setSongHeader":
                            MSE.song.setHeader(new fakeSongHeader(JSON.parse(MSE.getValue("songHeader"))));
                            MSE.song.Header.setValue2Wps();
                            MSE.WriteSongToFile();
                            break;
                        case "setEditorNull":
                            MSE.Editor = null;
                            break;
                        case "alertWait":
                            MSE.alertWaitBox();
                            break;
                    }
                    app.ActiveDocument.Protect(3, false, "passW0rd");
                }, 369);
            };
            w.commandInterval();
        },
        clearMSEcommand() {
            wps.PluginStorage.setItem("MSEcommand", null);
        },
        //renderContent 渲染页面 通过JScode的版本号判断如果代码发生了改变重新渲染
        createJPcodeRenderInterval: (w) => {
            w.JPcodeRenderInterval = () => {
                setTimeout(() => {
                    w.JPcodeRenderInterval();
                    if (!MSE.checkIsMuscr()) return;
                    MSE.setValue("JPcodeChangeInfo", JSON.parse(wps.PluginStorage.getItem("JPcodeChangeInfo")));
                    var codeMemory = wps.PluginStorage.getItem("JPcode");
                    if (MSE.JPcodeChangeInfo.version == MSE.oldJPcodeChangeInfo.version)
                        return
                    // if (!codeMemory || codeMemory == "null")
                    //     return
                    console.log("JPcodeChangeInfo.version = ", MSE.JPcodeChangeInfo.version);

                    //-----开始操作文档
                    var app = wps.WpsApplication();
                    app.ActiveDocument.Unprotect("passW0rd"); //先解锁然后操作

                    MSE.setValue("JPcode", codeMemory);
                    MSE.WriteCodeToFile();
                    MSE.WriteSongToFile();
                    drawByJPcode(MSE.JPcode, MSE.JPcodeChangeInfo.CmdNo, MSE.JPcodeChangeInfo.force);
                    MSE.oldJPcode = MSE.JPcode;
                    MSE.oldJPcodeChangeInfo = MSE.JPcodeChangeInfo;

                    app.ActiveDocument.Protect(3, false, "passW0rd");
                }, 600);
            };
            w.JPcodeRenderInterval();
        },
    }

})(window)