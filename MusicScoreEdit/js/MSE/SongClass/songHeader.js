/**
 * song -> SongHrader
 */
(function (w) {
    if (w.fakeSongHeader)
        return;

    //音乐信息
    function SongHeader(info) {
        this.B1 = info.B1;                                  //主标题
        this.B2 = info.B2;                                  //副标题
        // this.Z1 = info.Z1;   
        this.Z2 = info.Z2;                                  //曲 作者
        this.D = info.D;                                    //调式D
        this.P = info.P;                                    //拍号P
        this.J = info.J;                                    //节拍 (速度 120...)
        this.noteType = info.noteType;                      //拍号P的分母分之1 (X分音符是一拍 1/X)
    }

    SongHeader.prototype.toString = function () {
        return JSON.stringify(this);
    }
    SongHeader.prototype.setValue2Wps = function () {
        common.SetBookMark("B1", "text", this.B1);
        common.SetBookMark("B2", "text", this.B2);
        common.SetBookMark("Z2", "text", this.Z2 ? this.Z2 + " 曲" : "");
        common.SetBookMark("J", "text", this.J);
        common.SetBookMark("D", "text", this.D);
        common.SetBookMark("Pn", "text", this.P.n);
        common.SetBookMark("Pd", "text", this.P.d);
        var font = { family: "黑体", size: 14, color: null };
        common.rangeSetFont(wps.WpsApplication().ActiveDocument.Bookmarks.Item("P_ALL").Range, font);
    }

    w.fakeSongHeader = SongHeader;
})(window);
