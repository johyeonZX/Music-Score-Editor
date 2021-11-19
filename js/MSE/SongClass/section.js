/**
 * song -> tracks -> track -> sections -> section
 */
(function (w) {
    if (w.fakeSection)
        return;

    //小节类
    function section(info) {
        this.notes = [];                                    //小节中的音符
        this.symbol = "";                                   //标记 { 小节线| 开始[| 结束|] }
        this.total = new Fraction(0, 0);                    //记录本小结总时长，只能通过setNote来改变
        this.nowCellNo = 1;                                 //当前所在格位
        this.afterPlayCommand = info.afterPlayCommand;      //播放后执行的命令
        this.afterRenderCommand = info.afterRenderCommand;  //渲染后执行的命令(该音符之后的显示动作)
    }

    /**
     * 添加 这里直接传入一个note对象
     * @param {object} note 
     */
    section.prototype.addNote = function (note) {
        this.notes.push(note);
        this.refreshToWps();
    }
    /**
     * 创建 这里要把note参数传入进来
     * @param {object} info 
     */
    section.prototype.createNote = function (info) {
        this.notes.push(new fakeNote(info));
        this.refreshToWps();
    }
    /**
     * 设置 noteNo 序号 
     * @param {number} noteNo 
     * @param {object} note 
     */
    section.prototype.setNote = function (noteNo, note) {
        //重新计算note位置（addr最后一位） 
        for (let i = this.nowCellNo; i < MSE.song.Header.P.n; i++) {
            let plus = fra_add(this.total, note.getTimeLine());
            if (fra_bigger(plus, fra_mul(note.noteType, new Fraction(i, 1)))) {
                this.nowCellNo += 1;
                continue;
            } else {
                this.total = plus;
                break;
            }
        }
        note.addr[3][1] = this.nowCellNo;

        var XY = [0, 0];
        var app = wps.WpsApplication();
        var doc = app.ActiveDocument;
        var selection = app.ActiveWindow.Selection;

        //symbol 音符填入
        var sectionCell = doc.Tables.Item(note.addr[0] + 1).Cell(note.addr[1][0], note.addr[1][1]);
        var noteCell = sectionCell.Tables.Item(note.addr[2]).Cell(note.addr[3][0], note.addr[3][1]);
        if (note.attDot && note.addr[3][1] > 1) { // todo
            let previousText = noteCell.Previous.Range.Text;
            previousText = previousText.substr(0, previousText.length - 2);
            if (!previousText) {
                this.nowCellNo -= 1;
                note.addr[3][1] = this.nowCellNo;
                noteCell = noteCell.Previous;
            }
        }
        let oldSeINFO = [noteCell.Range.Start, noteCell.Range.End]; // old start & end info 
        doc.Range(noteCell.Range.End - 1, noteCell.Range.End - 1).Select();
        selection.TypeText(note.symbol);
        let newSeINFO = [noteCell.Range.Start, noteCell.Range.End]; // new start & end info 

        //添加倍音符号
        if (note.high) {
            //选中这个添加的音符
            doc.Range(oldSeINFO[1] - 1, newSeINFO[1] - 1).Select(); //表格中会多一个符号

            XY = [selection.Information(5), selection.Information(6)]; //获取光标XY
            wps.WpsApplication().ActiveDocument.Range().Select();
            selection.EndKey();

            var shape = wps.WpsApplication().ActiveDocument.Shapes.AddPicture(common.getFullURL("images/Mu/", true)
                + (note.high > 0 ? "+" + note.high : note.high) + ".png");
            // shape.Width = wps.WpsApplication().CentimetersToPoints(0.25);
            shape.RelativeVerticalPosition = 1;         //指定形状的相对垂直位置
            shape.RelativeHorizontalPosition = 1;       //指定形状的相对水平位置
            shape.Left = XY[0] + 1;
            shape.Top = XY[1] + (note.high > 0 ? -11 : 19);
            shape.Name = common.newPicName();
            shape.Width = 5;
            note.shapePush(shape.Name);
        }

        //添加附点符号
        if (note.attDot) {
            //选中这个添加的音符
            // app.Selection.SetRange(oldSeINFO[1] - 1, newSeINFO[1] - 1) //表格中会多一个符号
            app.Selection.SetRange(newSeINFO[1] - 1, newSeINFO[1] - 1);
            var shape = wps.WpsApplication().Selection.InlineShapes.AddPicture(common.getFullURL("images/Mu/", true) + "attDot.png");
            shape.Width = 5; shape.Height = 10;
            shape.Name = common.newPicName();
            note.shapePush(shape.Name);
        }

        //添加减时线(下划线)
        var line = 0;
        // wdUnderlineDouble	3	 双线。
        // wdUnderlineNone	    0	 无下划线。
        // wdUnderlineSingle	1	 单线。 默认值。        
        switch (note.value.d) {
            case 8:
                line = 1;
                break;
            case 16:
                line = 3;
                break;
            case 32:
                //todo
                break;
        }
        doc.Range(oldSeINFO[1] - 1, newSeINFO[1] - 1).Underline = line; //指定音符的符号

        this.notes[noteNo - 1] = note;
        this.refreshToWps();
        return true
    }
    /**
     * 删除小节中最后一个note
     */
    section.prototype.delLastNote = function () {
        this.notes.pop();
        this.refreshToWps();
    }
    /**
     * 删除数组中任意note
     * @param {number} 角标
     */
    section.prototype.removeNote = function (i) {
        if (this.notes.length > i) {
            this.notes.remove(i);
            this.refreshToWps();
        }
    }
    /**
     * 设置标记
     * @param {string} symbol
     */
    section.prototype.setSymbol = function (symbol) {
        this.symbol = symbol;
        this.refreshToWps();
    }
    //重置当前绘制下标
    section.prototype.resetNowCellNo = function () {
        this.nowCellNo = 1;
        this.refreshToWps();
    }
    //重置所有音符
    section.prototype.resetNotes = function () {
        if (this.notes.length > 0 && !!this.notes[0].addr) {
            let doc = wps.WpsApplication().ActiveDocument;
            let n = this.notes[0];
            let tab = doc.Tables.Item(n.addr[0] + 1).Cell(n.addr[1][0], n.addr[1][1]).Tables.Item(n.addr[2]);
            tab.Rows.Item(n.addr[3][0]).Range.Text = "";  //只清空当前行
        }
        this.notes.forEach(n => {
            n.clear(); //重新设置之前需要清空上次note的缓存
        });
        this.notes.length = 0;
        this.total = new Fraction(0, 0);
        this.refreshToWps();
    }
    //删除小节所有shapes
    section.prototype.clearShapes = function () {
        this.notes.forEach(n => {
            n.clear();
        });
    }
    section.prototype.refreshToWps = function () {
        wps.PluginStorage.setItem("song", JSON.stringify(MSE.song));
        common.SetBookMark("song", "text", JSON.stringify(MSE.song));
    }

    w.fakeSection = section;
})(window);