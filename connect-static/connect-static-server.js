// connect - static - server.js

var http = require('http');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');

// Serve up website directory
var serve = serveStatic('./http', {
    'index': ['default.html', 'default.htm', 'index.htm', 'index.html']
});

// Create server
var app = http.createServer(function(request, response) {
    var done = finalhandler(request, response);
    serve(request, response, done);
});

// Listen	
console.log('Connect is listening on port 8080 ');
app.listen(8080);
