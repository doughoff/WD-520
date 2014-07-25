// text-server.js
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end('Hello, world!');
}).listen(8080);
console.log('I\'m ready to respond with text.');
