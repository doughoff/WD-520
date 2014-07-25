// image-file-server.js
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'image/jpg'
    });
    fs.createReadStream('images/doge.jpg').pipe(response);
}).listen(8080);
console.log('I\'m ready to respond with an image.');
