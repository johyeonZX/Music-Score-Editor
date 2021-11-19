/**
 * song -> tracks -> track 
 */
(function (w) {
    if (w.fakeTrack)
        return;

    //音轨类
    function track(info) {
        this.sections = [];                                 //音轨中的小节
        this.afterPlayCommand = info.afterPlayCommand;      //播放后执行的命令
        this.afterRenderCommand = info.afterRenderCommand;  //渲染后执行的命令(该音符之后的显示动作)
    }

    /**
     * 创建 这里要把Section参数传入进来
     * @param {object} info 
     * @param {boolean} newView 是否新建WPS视图 -做个break，新建一个表
     * @param {number} QNo      新建视图的时候，需要传入该段Code对应的行数
     * @param {number} trackNum 音轨总数，插入不同音轨数对应的文件
     */
    track.prototype.createSection = function (info, newView, QNo, trackNum) {
        if (newView) {
            var pn = MSE.song.Header.P.n;
            var app = wps.WpsApplication();
            var doc = app.ActiveDocument;
            var selection = app.ActiveWindow.Selection;
            if (QNo > doc.Tables.Count - 1) {
                if (this.sections.length % (pn + 1) == pn) {
                    this.sections.push("break");
                    for (let i = 0; i < pn; i++) {
                        this.sections.push(new fakeSection({}));
                    }
                }
                doc.Range().Select();
                selection.EndKey();
                selection.InsertFile(common.getFullURL("templates/Q_TrackLine_" + trackNum + ".docx", true));

                //保证每次插入的表中间只空出一行段落
                let preTable = doc.Tables.Item(doc.Tables.Count - 1);
                let theTable = doc.Tables.Item(doc.Tables.Count);
                let centerP = doc.Range(preTable.Range.End, theTable.Range.Start).Paragraphs;
                for (let i = 0; centerP.Count > 1; i++) {
                    centerP.Item(2).Range.Select();
                    selection.EndKey();
                    selection.TypeBackspace();
                }

                this.refreshToWps();
                return
            } else
                return
        }
        this.sections.push(new fakeSection(info));
        this.refreshToWps();
    }
    /**
     * 删除数组中任意Section
     * @param {number} 角标 0开始
     */
    track.prototype.removeSection = function (i) {
        if (this.sections.length > i) {
            this.sections.remove(i);
            this.refreshToWps();
        }
    }
    track.prototype.refreshToWps = function () {
        wps.PluginStorage.setItem("song", JSON.stringify(MSE.song));
        common.SetBookMark("song", "text", JSON.stringify(MSE.song));
    }

    //播放此音轨
    track.prototype.play = function () {
    }

    w.fakeTrack = track;
})(window);