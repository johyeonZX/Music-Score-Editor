console.log('music-editor start console');

var liveServer = require("live-server");
var liveServerParam = {
    port: 80, // Set the server port. Defaults to 8080. 
    root: "D:\\参赛\\dev_JSAPI\\musicEdit\\",
    file: "index.html",
    open: "/wps-addon-publish/publish.html"
}
liveServer.start(liveServerParam);

