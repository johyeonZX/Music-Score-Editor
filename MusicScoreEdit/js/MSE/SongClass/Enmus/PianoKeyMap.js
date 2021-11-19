//把简谱的标识符号对应为音高的KEY
var PianoKeyMap = {
    "1": 60, "2": 62, "3": 64,
    "4": 65, "5": 67, "6": 69,
    "7": 71,
    "-": "-",   //延时线
    "0": "0",   //休止符
}

function getPianoCodeBySymbolAndHigh(symbol, high) {
    //有效返回midi音值，休止符延时线等，返回-1
    let code = /[1-7]/.test(Number(symbol)) ? PianoKeyMap[symbol] + 12 * high : -1;
    return code;
}
