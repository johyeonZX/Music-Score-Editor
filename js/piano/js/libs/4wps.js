
// addr 所在表格位置   [1, [2, 2], 1, [2, 1]] 第一个表中2,2格子中的表1，里面的2,1格子的内容
export function setColorByAddr(addr, color) {
    var tab = wps.WpsApplication().ActiveDocument.Tables.Item(addr[0] + 1).Cell(addr[1][0], addr[1][1])
        .Tables.Item(1);
    setColorByColumnsNo(tab, addr[3][1], color);
}

/**
 * @param {object} tab 表格
 * @param {number} colNo 列号
 */
function setColorByColumnsNo(tab, colNo, color) {
    let colCells = tab.Columns.Item(colNo).Cells;
    for (let i = 1; i <= colCells.Count; i++) {
        colCells.Item(i).Shading.BackgroundPatternColor = color;
    }
    tab.Columns.Item(colNo).Select();
}

export function selectCellByAddr(addr) {
    var tab = wps.WpsApplication().ActiveDocument.Tables.Item(addr[0] + 1).Cell(addr[1][0], addr[1][1])
        .Tables.Item(1);
    tab.Columns.Item(addr[3][1]).Select();
}
