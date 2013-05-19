var http = require('http');
var syncFS = new syncFS();

var requestListener = function (req, res) {
    console.log("Request: ", req);
    res.writeHead(200);
    res.end('Hello, World!\n');
}

var server = http.createServer(requestListener);
server.listen(8080);