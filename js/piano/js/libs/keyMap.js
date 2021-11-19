//0代表没有设置对应音符
//钢琴范围 21~108 （包括黑键）
var keyMap = {
    "Backquote": 0, "Digit1": 0, "Digit2": 61, "Digit3": 63, "Digit4": 0, "Digit5": 66, "Digit6": 68, "Digit7": 70, "Digit8": 0, "Digit9": 73, "Digit0": 75, "Minus": 0, "Equal": 78, "Backspace": 0,
    "KeyQ": 60, "KeyW": 62, "KeyE": 64, "KeyR": 65, "KeyT": 67, "KeyY": 69, "KeyU": 71, "KeyI": 72, "KeyO": 74, "KeyP": 76, "BracketLeft": 77, "BracketRight": 79, "Backslash": 0,
    "KeyA": 0, "KeyS": 49, "KeyD": 51, "KeyF": 0, "KeyG": 54, "KeyH": 56, "KeyJ": 58, "KeyK": 0, "KeyL": 61, "Semicolon": 63, "Quote": 0,
    "KeyZ": 48, "KeyX": 50, "KeyC": 52, "KeyV": 53, "KeyB": 55, "KeyN": 57, "KeyM": 59, "Comma": 60, "Period": 62, "Slash": 64,
}

export function getPianoKeyCode(code) {
    return keyMap[code];
}
