var varr = {
    codes: "",
    QNo: [],        //单音轨-行号s
    Q1No: [],       //多音轨-音轨1-行号s
    Q2No: [],       //多音轨-音轨2-行号s
    Q3No: [],       //多音轨-音轨3-行号s
    //============================================
    oldCodes: "",
    oldQNo: [],     //单音轨-行号s_before
    oldQ1No: [],    //多音轨-音轨1-行号s_before
    oldQ2No: [],    //多音轨-音轨2-行号s_before
    oldQ3No: [],    //多音轨-音轨3-行号s_before
    setVarr2Old: function () {
        varr.oldCodes = varr.codes;
        varr.oldQNo = MSE.song.tracks.length > 1 ? varr.Q1No : varr.QNo;
        varr.oldQ1No = varr.Q1No;
        varr.oldQ2No = varr.Q2No;
        varr.oldQ3No = varr.Q3No;
        varr.codes = "";
        varr.QNo = [];
        varr.Q1No = [];
        varr.Q2No = [];
        varr.Q3No = [];
    }
}

/**
 * //通过JpCode绘制wps正文
 * @param {string} JPcode 简谱脚本
 * @param {number} CmdNo 如果单绘制脚本某一行,则该参数传入脚本行数,从1开始 
 * @param {boolean} force 强制重新渲染，在全部脚本渲染时，不进行上次代码是否一致的比较，全部重新渲染
 */
function drawByJPcode(JPcode, CmdNo, force) {
    console.log("start redraw");

    var TrackNum = MSE.song.tracks.length;  //音轨总数
    var TrackNo = 1;    //音轨序号
    varr.codes = JPcode.split(/\n/);

    var app = wps.WpsApplication();
    app.ScreenUpdating = false;

    //记录音乐代码行号
    for (let i = 0; i < varr.codes.length; i++) {
        let code = varr.codes[i];
        if (code.startsWith("Q") & code.includes(":")) { //此行是脚本
            if (TrackNum > 1) {
                var flag = code.substr(1, 1);
                eval("varr.Q" + flag + "No.push(" + i + ")");
            } else {
                varr.QNo.push(i)
            }
        }
    }

    if (TrackNum > 1) {
        //循环渲染音轨
        for (let tn = 1; tn <= TrackNum; tn++) {
            TrackNo = tn;
            //删除多余的shapes
            for (let i = 0; i < varr["oldQ" + TrackNo + "No"].length; i++) {
                let codeLineNo = varr["Q" + TrackNo + "No"][i];
                let oldcodeLineNo = varr["oldQ" + TrackNo + "No"][i];
                let code = varr.codes[codeLineNo];
                let oldcode = varr.oldCodes[oldcodeLineNo];
                if (oldcode != code)  //代码发生改变必须要删掉相关shapes
                    delshapes(i + 1, TrackNo);
            }
            //渲染新的脚本
            for (let i = 0; i < varr["Q" + TrackNo + "No"].length; i++) {
                let lineNo = varr["Q" + TrackNo + "No"][i];
                let code = varr.codes[lineNo];
                var Qcode = code.split(":")[1];
                if (varr.oldCodes[lineNo] == varr.codes[lineNo]
                    && MSE.oldQMax == varr["Q" + TrackNo + "No"].length //代码一样不做修改
                    && !force)  //强制渲染不跳过
                    continue;
                if (!CmdNo) {   //全部脚本渲染条件
                    drawQ(Qcode, i + 1, TrackNo);
                    continue;
                } else if (CmdNo && CmdNo == (lineNo + 1)) {   //CmdNo 单行脚本渲染条件
                    drawQ(Qcode, i + 1, TrackNo);
                    break;
                }
            }
        }
    } else {
        //删除多余的shapes
        for (let i = 0; i < varr.oldQNo.length; i++) {
            let codeLineNo = varr.QNo[i];
            let oldcodeLineNo = varr.oldQNo[i];
            let code = varr.codes[codeLineNo];
            let oldcode = varr.oldCodes[oldcodeLineNo];
            if (oldcode != code)  //代码发生改变必须要删掉相关shapes
                delshapes(i + 1, TrackNo);
        }
        //渲染新的脚本
        for (let i = 0; i < varr.QNo.length; i++) {
            let lineNo = varr.QNo[i];
            let code = varr.codes[lineNo];
            var Qcode = code.split(":")[1];
            if (varr.oldCodes[lineNo] == varr.codes[lineNo]
                && MSE.oldQMax == varr.QNo.length //代码一样不做修改
                && !force)  //强制渲染不跳过
                continue;
            if (!CmdNo) {   //全部脚本渲染条件
                drawQ(Qcode, i + 1, TrackNo);
                continue;
            } else if (CmdNo && CmdNo == (lineNo + 1)) {   //CmdNo 单行脚本渲染条件
                drawQ(Qcode, i + 1, TrackNo);
                break;
            }
        }
    }

    if (!CmdNo) { //排除单行输入模式
        //绘制完成后再次重构 删除多余的表和section
        var app = wps.WpsApplication();
        var QMax = TrackNum == 1 ? varr.QNo.length : varr.Q1No.length;
        var tabMax = app.ActiveDocument.Tables.Count;
        if (tabMax - 1 > QMax) {
            for (let i = tabMax; i - 1 > QMax; i--) {
                var selection = app.ActiveWindow.Selection;
                app.ActiveDocument.Tables.Item(i).Delete();
                app.ActiveDocument.Range().Select();
                selection.EndKey();
                app.ActiveDocument.Range(selection.End - 1, selection.End).Delete();
                //删除section
                let tLen = MSE.song.tracks[TrackNo - 1].sections.length;
                for (let j = 0; j < TrackNum; j++) {
                    MSE.song.tracks[j].sections.length -= (tLen > 5 ? 5 : tLen);
                }
            }
        }
    }

    wps.WpsApplication().ActiveDocument.Range().Select();
    wps.WpsApplication().ActiveWindow.Selection.EndKey();
    MSE.oldQMax = TrackNum > 1 ? varr.Q1No.length : varr.QNo.length;
    varr.setVarr2Old();

    if (!force) { //force是页面设置那块触发的，他自己会触发这个 排除一下
        app.ScreenRefresh();
        app.ScreenUpdating = true;
    }
}

//通过Q行删除shapes
function delshapes(lineNo, TrackNo) {
    var sectionNoS = (lineNo - 1) * (MSE.song.Header.P.n + 1);
    for (let i = 0; i < MSE.song.Header.P.n; i++) {
        let section = MSE.song.tracks[TrackNo - 1].sections[sectionNoS + i];
        if (section && section != "break") {
            section.clearShapes();
            section.resetNotes();   //这里把note和表格也清空一下
        }
    }
}

//通过Qcode绘制Section
function drawQ(Qcode, lineNo, TrackNo) {
    var sectionNo = 0;  //小节序号
    var sections = [];
    sections = Qcode.includes("|") ? Qcode.split(/\|/) : [Qcode];
    if (sections.length < MSE.song.Header.P.n)
        sections.remove(MSE.song.Header.P.n);  //补够一拍
    if (sections.length > MSE.song.Header.P.n) {
        sections.length = MSE.song.Header.P.n;  //多余的去掉 不生效
    }
    for (let i = 0; i < sections.length; i++) {
        sectionNo += 1;
        if (!sections[sectionNo - 1] || !sections[sectionNo - 1].trim()) {
            sections[sectionNo - 1] = "0 0 0 0"
        }
        drawSection(sections[sectionNo - 1], lineNo, TrackNo, sectionNo);
    }
}

//通过section绘制note (小节代码,代码所在行序号,音轨序号,小节号)
function drawSection(sectionCode, lineNo, TrackNo, sectionNo) {
    if (sectionCode === "break") return;

    var app = wps.WpsApplication();
    var realSectionNo = (lineNo - 1) * (MSE.song.Header.P.n + 1) + sectionNo;
    var nowSection = MSE.song.tracks[TrackNo - 1].sections[realSectionNo - 1];
    var notes = sectionCode.split(" ").formatBlank();
    var noteNo = 1;

    //重建歌曲结构
    while (!MSE.song.tracks[TrackNo - 1]) {   //数组下表从0开始 TrackNo从1
        MSE.song.createTrack({});
    }
    while (!nowSection) {
        let trackNum = MSE.song.tracks.length;
        let newView = (TrackNo == 1 && (lineNo > (app.ActiveDocument.Tables.Count - 1))) ? true : false;
        MSE.song.tracks[TrackNo - 1].createSection({}, newView, lineNo, trackNum);
        nowSection = MSE.song.tracks[TrackNo - 1].sections[realSectionNo - 1];
    }
    while (!nowSection.notes[noteNo - 1]) {
        nowSection.createNote({});
    }

    //绘制音符
    nowSection.resetNowCellNo();
    nowSection.resetNotes();
    for (let i = 0; i < notes.length; i++) {
        if (!notes[i])
            continue;
        notes[i] = notes[i].replace(/ /g, "");
        var n = notes[i];
        var allStrNum = getAllStrNum(n); //统计所有字符

        var nodeType = MSE.song.Header.noteType;
        var delTime = new Fraction(1, Math.pow(2, format2Num(allStrNum["/"])) * nodeType.d); //减时线
        var high = format2Num(allStrNum["'"] ? + allStrNum["'"] : - allStrNum[","]);
        var symbol = n.substr(0, 1);
        var STmark = allStrNum["="] ? "=" : "";
        STmark = allStrNum["$"] ? "$" : "";
        STmark = allStrNum["#"] ? "#" : "";

        var noteInfo = {
            "noteType": nodeType,
            "noteName": getNoteNameByhigh(Number(high), symbol),
            "value": delTime,
            "symbol": symbol,
            "high": high,
            "attDot": !!allStrNum["."],
            "STmark": STmark,
            "addr": [lineNo, [2, sectionNo], 1, [(TrackNo - 1) * 2 + 1, 0]]  //最后这个0待定、是需要动态计算在哪个位置的
        }
        var note = new fakeNote(noteInfo);
        nowSection.setNote(noteNo, note);
        noteNo += 1;
    }

    //绘制完成后如果section没填充完成 则补0
    if (nowSection.nowCellNo < MSE.song.Header.P.n) {
        //todo
    }
}

function getAllStrNum(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}

function format2Num(str) {
    let num = Number(str);
    return num ? num : 0;
}

function getNoteNameByhigh(high, symbol) {
    // high=0 是中央键盘 4音阶
    var Scale = 4 + high;
    symbol = getKeyBySymbol(symbol);
    symbol = "-0".includes(symbol) ? symbol : symbol + Scale;
    return symbol;
}