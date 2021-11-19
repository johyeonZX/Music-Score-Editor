$(document).ready(function () {
	$("#editor_text").bind("input", function () {
		updateJPcode(true);
	});
	init(window);
});
var newContent;
var JPcode;				//脚本代码
var JPcodeChangeInfo;	//脚本改变信息(用于传递给WPS_MSE)

//初始化 加载简谱代码
function init(w) {
	doc = wps.WpsApplication().ActiveDocument;
	if (!doc.Bookmarks.Item("Muscore")) {
		wps.PluginStorage.setItem("editorCommand", null);
		wps.PluginStorage.setItem("MSEcommand", "setEditorNull");
		alert("非乐谱文件，无法进行脚本编辑")
		closePage();
		return
	}

	JPcode = wps.PluginStorage.getItem("JPcode");
	JPcodeChangeInfo = wps.PluginStorage.getItem("JPcodeChangeInfo");
	JPcodeChangeInfo = JPcodeChangeInfo ? JSON.parse(JPcodeChangeInfo) : {};
	$("#editor_text").val(JPcode);
	updateJPcode();

	w.onbeforeunload = function (e) {
		wps.PluginStorage.setItem("MSEcommand", "setEditorNull");
	};

	//editorCommandInterval 用来接收其他页面传递的命令 
	w.command = () => {
		setTimeout(() => {
			w.command();
			var editorCommand = wps.PluginStorage.getItem("editorCommand");
			console.log("editorCommand = ", editorCommand);
			if (!editorCommand) return;
			w.onbeforeunload = null;
			clearEditorCommand();
			switch (editorCommand) {
				case "close":
					closePage();
					break;
				case "refreshEditor":
					refresh();
					break;
			}
		}, 600);
	};
	w.command();
}

function clearEditorCommand() {
	wps.PluginStorage.setItem("editorCommand", null);
}

function setScroll() {
	$("#editor_div")[0].scrollTop = $("#editor_text")[0].scrollTop;
	$("#editor_div")[0].scrollLeft = $("#editor_text")[0].scrollLeft;
}

function editdorOnblur() {

}
function editdorKeyup() {

}
function editdorClick() {

}

function editdorKeydown() {
	textObj = $("#editor_text")[0];
	var keyCode = event.keyCode;
	var str;
	if (event.shiftKey && (keyCode == 222)) {
		if (keyCode == 222) {
			str = '"';
		}
		var startPos = textObj.selectionStart,
			endPos = textObj.selectionEnd,
			cursorPos = startPos,
			tmpStr = textObj.value;
		textObj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
		textObj.selectionStart = textObj.selectionEnd = cursorPos;
	}
	if (!event.ctrlKey && ("81|67|90|66|68|80|74|86|72|49|50".includes(keyCode))) {
		if (keyCode == 81) {
			str = 'Q';
			// } else if (keyCode == 67) {
			// 	str = 'C';
		} else if (keyCode == 66) {
			str = 'B';
		} else if (keyCode == 90) {
			str = 'Z';
		} else if (keyCode == 68) {
			str = 'D';
		} else if (keyCode == 80) {
			str = 'P';
		} else if (keyCode == 74) {
			str = 'J';
			// } else if (keyCode == 86) {
			// 	str = 'V';
			// } else if (keyCode == 72) {
			// 	str = 'H';
		} else if (keyCode == 49) {
			str = '1';
		} else if (keyCode == 50) {
			str = '2';
		} else {
			return true;
		}
		var startPos = textObj.selectionStart,
			endPos = textObj.selectionEnd,
			cursorPos = startPos,
			tmpStr = textObj.value;
		var upNote = tmpStr.substring(startPos - 1, startPos);
		var upupNote = tmpStr.substring(startPos - 2, startPos - 1);
		let trackNum = JSON.parse(wps.PluginStorage.getItem("song")).tracks.length;
		if ("49|50".includes(keyCode)) {
			if (upNote == "Z" && keyCode == 49) return true;  //先把Z1注释掉
			if ("B|Z|Q".includes(upNote) && upupNote == "\n") {  //前面是BZ&&前两个字符是换行时才有效果
				textObj.value = tmpStr.substring(0, startPos) + str + ': ' + tmpStr.substring(endPos, tmpStr.length);
				textObj.selectionStart = textObj.selectionEnd = cursorPos + 3;
				updateJPcode();
				return false;
			}
			//普通输入 12无效果 
		} else if (upNote == "\n" || !tmpStr.replace(/\n/g, "")) {
			if ("B|Z".includes(str) || ("Q".includes(str) && trackNum > 1)) {
				textObj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
				textObj.selectionStart = textObj.selectionEnd = cursorPos + 1;
			} else {
				textObj.value = tmpStr.substring(0, startPos) + str + ': ' + tmpStr.substring(endPos, tmpStr.length);
				textObj.selectionStart = textObj.selectionEnd = cursorPos + 3;
			}
			updateJPcode();
			return false;
		}
	}
	return true;
}

function onColor(content, type) {
	if (type == 'Q') {
		var yinhao = false;
		var zhongkuohao = false;
		var newCode = '';
		var lastNote = '';
		for (i = 0; i < content.length; i++) {
			note = content.charAt(i);
			upNote = content.charAt(i - 1);
			nextNote = content.charAt(i + 1);
			if (note == '"') {
				if (yinhao == false) {
					yinhao = true;
				} else {
					yinhao = false;
				}
			}
			if (yinhao == true) {
				newCode += note;
				continue;
			}
			if (lastNote.indexOf('|') == -1) {
				if (note == '[') {
					if (zhongkuohao == false) {
						zhongkuohao = true;
					}
				} else if (note == ']') {
					zhongkuohao = false;
				}
				if (zhongkuohao == true) {
					newCode += note;
					continue;
				}
			}
			if ("0123456789-".indexOf(note) > -1 && upNote != 'Q' && upNote != 'C') {
				note = '<span class="num">' + note + '</span>';
			}
			if (note == "|") {
				note = '<span class="xiaojiexian\">' + note + '</span>';
			}
			if (note == ":" && (upNote == '|' || nextNote == '|')) {
				note = '<span class="xiaojiexian\">' + note + '</span>';
			}
			if (note == "{" || note == '}') {
				note = '<span class="dakuohu">' + note + '</span>';
			}
			if (isNote(content.charAt(i))) {
				lastNote = content.charAt(i);
			}
			newCode += note;
		}
		newCode = newCode.replace(/(^[A-Z]:|^[A-Z]+[\d]:|^[Q]+[\d]+[\"]+[^\"]+[\"]|^[Q]+[\d]+[\"]+[\"]:)/g, "<span class=\"hangtou\">$1</span>");
		newCode = '<span class="qu">' + newCode + '</span>';
		content = newCode;
	} else {
		content = content.replace(/(^[A-Z]:|^[A-Z]+[\d]:|^[Q]+[\d]+[\"]+[^\"]+[\"]|^[Q]+[\d]+[\"]+[\"]:)/g, "<span class=\"hangtou\">$1</span>");
	}
	content = content.replace(/^(#.*?$)/g, "<span class=\"zhushi\">$1</span>");
	content = content.replace(/(\[fenye\])/g, "<span class=\"fenye\">$1</span>");
	return content;
}


function setColor() {
	var content = $("#editor_text").val();
	content = content.replace(/\&/g, "&amp;");
	content = content.replace(/ /g, "&nbsp;");
	arr = content.split("\n");
	newContent = '';
	for (var i = 0; i < arr.length; i++) {
		var v = arr[i].replace(/(^\s*)|(\s*$)/g, '');
		newContent += onColor(v, v.charAt(0)) + "<br/>";
	}
	content = content + "<br/><br/>";
	$("#editor_div").html(newContent);
}

function updateJPcode() {
	textObj = $("#editor_text")[0];
	var CmdNo = 0;
	var startPos = textObj.selectionStart,
		endPos = textObj.selectionEnd,
		tmpStr = textObj.value;
	var cuText = tmpStr.substring(startPos - 1, startPos);
	if ('a0123456789|:-,\'./#$='.indexOf(cuText) > 0) {
		textObj.value = tmpStr.substring(0, startPos) + 'tag' + tmpStr.substring(endPos, tmpStr.length);
		formatJP();
		tmpStr = textObj.value;
		gbPOS_ = tmpStr.indexOf("tag")
		tmpStr = tmpStr.replace(/tag/g, "");
		textObj.value = tmpStr;
		textObj.selectionStart = textObj.selectionEnd = gbPOS_;
		//CmdNo 用于优化 提升渲染速率 只渲染单行脚本
		CmdNo = codeFormat(tmpStr.substring(0, startPos)).split(/\n/).length;
	}
	//如果代码总行数发送改变则需要全部渲染
	var newLineNum = tmpStr.split(/\n/).length;
	if (JPcodeChangeInfo["JPcodeLineNum"] + 1 != newLineNum) {
		CmdNo = 0;	//传递行数为0就是全部脚本渲染
	}

	//！！简谱代码和版本号传递给WPS
	JPcode = $("#editor_text").val();
	JPcodeChangeInfo["version"] = new Date().getTime();
	JPcodeChangeInfo["CmdNo"] = CmdNo;
	JPcodeChangeInfo["JPcodeLineNum"] = newLineNum;
	JPcode = codeFormat(JPcode);
	wps.PluginStorage.setItem('JPcode', JPcode);
	wps.PluginStorage.setItem('JPcodeChangeInfo', JSON.stringify(JPcodeChangeInfo));

	//设置颜色
	setColor();
}

function codeFormat(JPcode) {
	return JPcode.split("\n").filter(function (c) {
		//if (c.trim() == "Q:") return false;
		return c && c.trim();
	}).join("\n");
}

function formatJP() {
	var content = $("#editor_text").val();
	content = content.replace(/\r\n/g, "\n");
	arr = content.split("\n");
	newContent = '';
	for (var i = 0; i < arr.length; i++) {
		var v = arr[i];
		if (v.charAt(0) == 'Q') {
			var v = arr[i].replace(/\ /g, '');
			v = v.replace(':', ': ');
			var yinhao = false;
			var zhongkuohao = false;
			var newCode = '';
			var lastNote = '';
			for (x = 0; x < v.length; x++) {
				note = v.charAt(x);
				upNote = v.charAt(x - 1);
				nextNote = v.charAt(x + 1);
				if (note == '"') {
					if (yinhao == false) {
						yinhao = true;
					} else {
						yinhao = false;
					}
				}
				if (yinhao == true) {
					newCode += note;
					continue;
				}
				if (lastNote.indexOf('|') == -1) {
					if (note == '[') {
						if (zhongkuohao == false) {
							zhongkuohao = true;
						}
					} else if (note == ']') {
						zhongkuohao = false;
					}
					if (zhongkuohao == true) {
						newCode += note;
						continue;
					}
				}
				if ("0123456789-".indexOf(note) > -1 && upNote != 'Q' && upNote != 'C' && upNote != ' ' && upNote != '(' && upNote != 'y') {
					note = ' ' + note;
				}
				if (note == "(" && upNote != '(') {
					note = ' ' + note;
				}
				if (note == "|" && upNote != '|' && upNote != ':') {
					note = ' ' + note;
				}
				if (note == ":" && nextNote == '|') {
					note = ' ' + note;
				}
				if (note == "{" || note == '}') {
					note = ' ' + note;
				}
				if (isNote(v.charAt(x))) {
					lastNote = v.charAt(x);
				}
				newCode += note;
			}
			newContent += newCode + "\n";
		} else {
			newContent += v + "\n";
		}
	}
	$("#editor_text").val(newContent);
}

function isNote(str) {
	var nList = "0123456789-|";
	if (nList.indexOf(str) > -1) {
		return true;
	}
	return false;
}

function isNoteStart(str) {
	var nList = "0123456789-|:(\n";
	if (nList.indexOf(str) > -1) {
		return true;
	}
	return false;
}


function closePage() {
	window.close()
}
function refresh() {
	location = location;
}