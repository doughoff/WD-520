// text-server.js
var http = require('http');
var hits = 0;
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end('Hello, world!');
    console.log('Received hit request #' + ++hits);
}).listen(8080);
console.log('I\'m ready to respond with text.');
