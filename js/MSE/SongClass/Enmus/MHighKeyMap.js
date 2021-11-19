//把简谱的标识符号对应为音高的KEY
var MHighKeyMap = {
    "1": "C", "2": "D", "3": "E",
    "4": "F", "5": "G", "6": "A",
    "7": "B",
    "C": "1", "D": "2", "E": "3",
    "F": "4", "G": "5", "A": "6",
    "B": "7",
    "-": "-",   //延时线
    "0": "0",   //休止符
}

function getKeyBySymbol(code) {
    return MHighKeyMap[code];
}
