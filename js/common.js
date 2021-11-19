((w) => {
    w.refresh = () => { location = location }
    w.common = {
        /**
         * 弹出选择框
         * @param {number} type 文件选择器msoFileDialogFilePicker=3 另存为msoFileDialogSaveAs=2
         * @param {string} title 重写文件拾取器的名字
         * @param {number} defaultT 默认文件类型 | 19 .ofd | 20 .pdf | 21 .muscr |
         * @returns 选择的文件路径
         */
        selectFile: (type, title, defaultT) => {
            var dialog = wps.WpsApplication().FileDialog(type);
            dialog.Title = title ? title : "";
            if (type == 2) {
                dialog.FilterIndex = defaultT ? defaultT : dialog.Filters.Count;
            }
            if (dialog.Show()) {  //-1选择  0没选择
                filePath = dialog.SelectedItems.Item(1);
                fileName = filePath.indexOf("/") ? filePath.substring(filePath.lastIndexOf("/")) : filePath.substring(filePath.lastIndexOf("\\"));
                return filePath;
            }
            return null;
        },
        /**
         * midi文件格式转换 
         * wps读出是4字节 render读出是双字节
         * @param {string} data 
         * @returns 4字节转双字节
         */
        midiDataFormat: (data) => {
            return decodeURI(encodeURI(data).replace(/%EF%BE/g, "%C2").replace(/%EF%BF/g, "%C3"));
        },
        /**
         * 检查操作系统
         * @returns Win10 | Win7 | WinVista | Win2003 | WinXP | Win2000 | Linux | Unix | Mac
         */
        detectOS: () => {
            var sUserAgent = navigator.userAgent;
            var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
            var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
            if (isMac) return "Mac";
            var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
            if (isUnix) return "Unix";
            var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
            if (isLinux) return "Linux";
            if (isWin) {
                var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
                if (isWin2K) return "Win2000";
                var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
                if (isWinXP) return "WinXP";
                var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
                if (isWin2003) return "Win2003";
                var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
                if (isWinVista) return "WinVista";
                var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
                if (isWin7) return "Win7";
                var isWin10 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 10") || sUserAgent.indexOf("Windows NT 10.0") > -1;
                if (isWin10) return "Win10";
            }
            return "other";
        },
        /**
         * 获取html绝对路径 http://xxxxxx/xxx/xx.html
         * @param {string} html 文件全称  xxx/xx.html
         * @param {boolean} readFile 是否需要读入的文件 需要设置这个为true
         */
        getFullURL: (html, readFile) => {
            //弹出辅助窗格框
            var GetUrlPath = () => {
                let uPath = location.origin; //获取根吧
                //file开头_离线部署模式 用正则去获取插件的根路径
                if (uPath.startsWith("file"))
                    uPath = location.href.match(/^\w*(\w*[-+./:])*music-editor(\w*[-+./_])*\w\//g)[0];
                return uPath;
            }

            var url = GetUrlPath();
            if (url.length != 0)
                url = url.concat("/" + html);
            else
                url = url.concat("./" + html);

            if (readFile) {
                url = url.replace(/file:\/\/\//g, "").replace(/\/\//g, "/");
                url = url.replace(/http:\//g, "http://").replace(/https:\//g, "http://");
                if (common.detectOS() == "Linux")
                    url = url.startsWith("/") ? url : "/" + url;
            }
            return url;
        },
        /**
         * 书签替换  //目前替换shape中的内容存在问题
         * @param {string} bookmarkStr  书签名
         * @param {string} type         替换类型
         * @param {string} text         替换内容
         */
        SetBookMark: (bookmarkStr, type, text) => {
            var app = wps.WpsApplication();
            var doc = wps.WpsApplication().ActiveDocument;
            var bookmark = doc.Bookmarks.Item(bookmarkStr);
            let bookStart = bookmark.Range.Start;
            let bookEnd = bookmark.Range.End;
            let beforeEnd = doc.Range().End;

            if (bookmark) {
                //Range.StoryType -> WdStoryType[wdMainTextStory|1|正文部分,wdTextFrameStory|5|文本框部分] 
                beforeEnd = bookmark.Range.StoryType == 5 ? bookmark.Range.StoryLength : beforeEnd;

                if (!type || type === "text") {
                    bookmark.Range.Text = text;
                } else if (type === "link") {
                    bookmark.Range.InsertFile(text);
                } else if (type === "pic") {
                    bookmark.Range.InlineShapes.AddPicture(text);
                }

                let nowEnd = doc.Range().End;
                let range = bookmark.Range;
                nowEnd = range.StoryType == 5 ? bookmark.Range.StoryLength : nowEnd;    //文本框是不同的story
                if (!doc.Bookmarks.Exists(bookmark.Name)) {  //书签不存在就添加书签
                    range.SetRange(bookStart, bookEnd + (nowEnd - beforeEnd));
                    doc.Bookmarks.Add(bookmark.Name, range);
                } else {  //书签存在就删掉再添加
                    bookmark.Delete();
                    app.Selection.SetRange(bookStart, bookEnd + (nowEnd - beforeEnd));
                    doc.Bookmarks.Add(bookmark.Name, app.Selection.Range);
                }
                app.ActiveWindow.Selection.WholeStory();
                app.ActiveWindow.Selection.EndKey();
            }
        },
        /**
         * range设置字体，字号等
         * @param {object} range 
         * @param {object} { family, size, color }
         */
        rangeSetFont: (range, info) => {
            var font = range.Font;
            font.Name = !info.family ? font.Name : info.family;
            font.Size = !info.size ? font.Size : info.size;
            if (info.color) {
                let c10 = hex2int(info.color);
                font.Color = c10;
                font.UnderlineColor = c10;
            }
        },
        /**
         * 16转10进制
         * @param {string} hex 
         * @returns int
         */
        hex2int: (hex) => {
            var len = hex.length, a = new Array(len), code;
            for (var i = 0; i < len; i++) {
                code = hex.charCodeAt(i);
                if (48 <= code && code < 58) {
                    code -= 48;
                } else {
                    code = (code & 0xdf) - 65 + 10;
                }
                a[i] = code;
            }
            return a.reduce(function (acc, c) {
                acc = 16 * acc + c;
                return acc;
            }, 0);
        },
        /**
         * 小数格式化
         * @param {number} number 
         * @param {number} fixNum  可空，默认保留两位小数
         */
        floatFormat: (number, fixNum) => {
            fixNum = fixNum ? fixNum : 2;
            return Number(Math.floor(number * (10 ** fixNum)) / (10 ** fixNum));
        },
        getWindowParam: (variable) => {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) { return pair[1]; }
            }
            return (false);
        },
        newPicName: () => {
            return Math.ceil(Math.random() * 1234567890).toString();
        },
        dateFormat: (fmt, date) => {
            let ret;
            const opt = {
                "Y+": date.getFullYear().toString(),        // 年
                "y+": date.getFullYear().toString(),        // 年
                "M+": (date.getMonth() + 1).toString(),     // 月
                "d+": date.getDate().toString(),            // 日
                "H+": date.getHours().toString(),           // 时
                "m+": date.getMinutes().toString(),         // 分
                "s+": date.getSeconds().toString()          // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (let k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                };
            };
            return fmt;
        },
        Base64: {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = common.Base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64
                    } else if (isNaN(i)) {
                        a = 64
                    }
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
                }
                return t
            },
            decode: function (e) {
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                while (f < e.length) {
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) {
                        t = t + String.fromCharCode(r)
                    }
                    if (a != 64) {
                        t = t + String.fromCharCode(i)
                    }
                }
                t = common.Base64._utf8_decode(t);
                return t
            },
            _utf8_encode: function (e) {
                e = e.replace(/rn/g, "n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r)
                    } else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128)
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128)
                    }
                }
                return t
            },
            _utf8_decode: function (e) {
                var t = "";
                var n = 0;
                var r = c1 = c2 = 0;
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3
                    }
                }
                return t
            }
        },
    }

    //给数组添加个remove方法
    Array.prototype.remove = function (from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };
    Array.prototype.formatBlank = function () {
        return this.filter(function (s) {
            return s && s.trim();
        });
    };
})(window)
