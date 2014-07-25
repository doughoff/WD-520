// get-post-server.js
var http = require('http');
var queryString = require('querystring');
var items = [];


var server = http.createServer(function(request, response) {
    if ('/' == request.url) {
        switch (request.method) {
            case 'GET':
                show(response);
                break;
            case 'POST':
                add(request, response);
                break;
            default:
                sendStatus(400, response);
        }
    } else {
        sendStatus(404, response);
    }

});
server.listen(8080);
console.log('GET/POST server is active.');

function show(response) {
    var htmlDocument = '<!doctype html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body><h1>List</h1><ul>' + items.map(function(item) {
            return '<li>' + item + '</li>';
        })
        .join('') + '</ul><form method="post" action="/"><p><input type="text" name="item" placeholder="Add item" autofocus/></p><p><input type="submit" /></p></form></body></html>';
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Content-Length', Buffer.byteLength(htmlDocument));
    response.end(htmlDocument);
}

function add(request, response) {
    var formData = '';
    request.setEncoding('UTF-8');
    request.on('data', function(chunk) {
        formData += chunk;
    });
    request.on('end', function() {
        var obj = queryString.parse(formData);
        items.push(obj.item);
        show(response);
    });
}

function sendStatus(code, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.statusCode = code;

    switch (code) {
        case 400:
            response.end('Bad Request');
            break;
        case 404:
            response.end('Not Found');
            break;
        default:
            response.end('Unknown HTTP response code');
    }
}
