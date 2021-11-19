/**
 * song -> tracks -> track -> sections -> section -> notes -> note
 */
(function (w) {
    if (w.fakeNote)
        return;

    //音符类
    function note(info) {
        this.noteType = info.noteType;                      //拍号P的分母分之1 (X分音符是一拍 1/X)
        this.noteName = info.noteName;                      //C3 D3 E3 ....
        this.value = info.value;                            //表示该音符是几分音符 [1全音 1/2二分 1/4四分.... 1/32]   减时用"/"表示
        // this.timeLine = info.timeLine;                      //表示该音符的时值 (就是value 如果有附点再多加个附点的时间 3/4 3/8...)
        this.symbol = info.symbol;                          //[1~7 0 -] 谱面显示的数字/字符 默认休止符“-”
        this.high = info.high;                              //[-2,-1,0,1,2] 倍低音/无/倍高音  _JPcode倍高音符号' 倍低音符号,
        this.attDot = info.attDot;                          //是否有附点  _JPcode附点符号.
        this.STmark = info.STmark;                          //Short Time Mark [# $ = ]升音 降音 还原音 空代表没有
        this.afterPlayCommand = info.afterPlayCommand;      //播放后执行的命令
        this.afterRenderCommand = info.afterRenderCommand;  //渲染后执行的命令(该音符之后的显示动作)
        this.addr = info.addr;                              //wps中的地址  track表的小节->section表的note   //[1, [2, 2], 1, [2, 1]] 第一个表中2,2格子中的表1，里面的2,1格子的内容
        this.shapes = [];                                   //shapes  对应的图形 倍高、倍低等
    }

    note.prototype.getTimeLine = function () {
        var timeLine = this.attDot ? fra_add(this.value, new Fraction(this.value.n, this.value.d * 2)) : this.value;
        return timeLine;
    }

    note.prototype.shapePush = function (name) {
        this.shapes.push(name);
    }

    note.prototype.delAllShape = function () {
        let doc = wps.WpsApplication().ActiveDocument;
        this.shapes.forEach(shapeName => {
            let shape = doc.Shapes.Item(shapeName);
            if (shape) {
                shape.Delete()
            } else {
                shape = doc.InlineShapes.Item(shapeName)
                if (shape) shape.Delete()
            }
        });
        this.shapes.length = 0;
    }

    //清空图片和note缓存
    note.prototype.clear = function () {
        this.delAllShape();
    }

    w.fakeNote = note;
})(window);