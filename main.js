var developMode = true;
var developVersion = new Date().getTime();
var JSALL = [
    //加载时注意先后顺序
    "js/jquery/jquery-3.5.1.min.js",        //jq
    "js/util.js",                           //枚举
    "js/common.js",                         //lib 一些通用方法
    "js/MSE/MSE.js",                        //music score edit
    "js/MSE/MSE_Painter.js",                //music score painter
    "js/ribbon.js",                         //工具栏控制
    "js/Event.js",                          //wps 监听事件

    "js/libs/Fraction.js",                  //分数类
    "js/MSE/SongClass/song.js",             //歌曲类   
    "js/MSE/SongClass/songHeader.js",       //歌曲头部类      
    "js/MSE/SongClass/track.js",            //音轨类     
    "js/MSE/SongClass/section.js",          //小节类    
    "js/MSE/SongClass/note.js",             //音符类  
    "js/MSE/SongClass/Enmus/MHighKeyMap.js",//简谱-音高枚举值 
    "js/MSE/SongClass/Enmus/PianoKeyMap.js",//钢琴-code枚举值 
]

JSALL.forEach(JSURL => {
    document.write("<script language='javascript' src='" + JSURL + "?v=" + developVersion + "'></script>");
});

if (developMode) {
    //刷新index.html的话初始化一些东西，方便调试
    window.onload = function (e) {
        setTimeout(() => {
            if (!window.commandInterval && !window.JPcodeRenderInterval) {
                //一定要wps插件加载完成后创建interval，不然严重卡顿！。。
                MSE.createCommandInterval(window);
                MSE.createJPcodeRenderInterval(window);
                OnDocumentOpen();
                createPianoPane();
            }
        }, 2000);
    };
}
