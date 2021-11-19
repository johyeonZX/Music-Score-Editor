/**
 * song 
 */
(function (w) {
    if (w.fakeSong)
        return;

    //音乐
    function Song(info) {
        this.tracks = [];                                           //音轨中的小节
        this.Header = new fakeSongHeader(info.Header);              //头部信息
        this.TimeSum = 0;                                           //歌曲总时长 毫秒
        this.afterPlayCommand = info.afterPlayCommand;              //播放后执行的命令
        this.afterRenderCommand = info.afterRenderCommand;          //渲染后执行的命令(该音符之后的显示动作)
        if (info.tracks) {
            info.tracks.forEach(t => {
                this.tracks.push(new fakeTrack(t));
            });
        }
    }

    /**
     * 创建 这里要把Track参数传入进来  
     * @param {object} info track对象
     */
    Song.prototype.createTrack = function (info) {
        this.tracks.push(new fakeTrack(info));
        this.refreshToWps();
    }
    /**
     * 删除数组中任意Track
     * @param {number} 角标 0开始
     */
    Song.prototype.removeTrack = function (i) {
        if (this.tracks.length > i) {
            this.tracks.remove(i);
            this.refreshToWps();
        }
    }
    /**
     * 设置歌曲头
     * @param {object} header 
     */
    Song.prototype.setHeader = function (header) {
        this.Header = header;
        this.refreshToWps();
    }
    /**
     * 保存到WPS
     */
    Song.prototype.refreshToWps = function () {
        wps.PluginStorage.setItem("song", JSON.stringify(this));
        common.SetBookMark("song", "text", JSON.stringify(this));
    }
    /**
     * 转换为piano需要的格式
     */
    Song.prototype.trans2PianoRead = function () {
        let J = this.Header.J;         // 节拍 (速度 xxx拍为1分钟)
        let p = 60 * 1000 / J;         // 60 * 1000 毫秒/节拍 (一拍xx毫秒)
        let timeS = 0;                 // 歌曲总共时长
        let TrackObj = [];             // 音轨音符事件 [音轨1_notes，音轨2_notes]  ->  音轨格式  [{60,0.5},{65，1.5},.....]
        if (this.tracks.length > 0) {
            for (let i = 0; i < this.tracks.length; i++) {
                let sections = this.tracks[i].sections;
                let notesObj = [];                                     //音轨内音符事件_notes
                sections.forEach(section => {
                    if (section === "break")
                        return
                    section.notes.forEach(note => {
                        var tL = note.getTimeLine();                //音符真实时值 (3/8拍..)
                        var beishu = fra_div(tL, note.noteType);    //一拍的x倍 noteType设定几分音符为1拍 tL/noteType就是一拍的几倍
                        var long = p * beishu.n / beishu.d;         //此音符所用时间为 p * beishu.n / beishu.d
                        notesObj.push({
                            "code": getPianoCodeBySymbolAndHigh(note.symbol, note.high),     //piano code
                            "long": long,                                                    //long 按键时长 毫秒
                            "t": timeS,                                                      //t    整首歌里的出现时间 毫秒
                            "addr": note.addr,                                               //所在表格位置   [1, [2, 2], 1, [2, 1]] 第一个表中2,2格子中的表1，里面的2,1格子的内容
                        });
                        timeS += long;                              //计算歌曲总时长
                    })
                });
                TrackObj.push(notesObj);
                this.TimeSum = this.TimeSum > timeS ? this.TimeSum : timeS;
                timeS = 0;
            }

            //组合起来并且排序
            let concat = [];
            TrackObj.forEach(t => {         //组合所有音轨
                concat = concat.concat(t);
            });
            concat.sort(function (a, b) {   //按播放时间排序
                return a.t - b.t;
            });
            TrackObj = concat;

            let pianoObj = { "total": this.TimeSum, "TrackObj": TrackObj };
            return pianoObj;
        }
        return null;
    }
    /**
     * 获取歌曲总时长
     */
    Song.prototype.getTimeSum = function () {
        this.trans2PianoRead();
        return this.TimeSum;
    }

    w.fakeSong = Song;
})(window);