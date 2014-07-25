// connect - greeter - logger.js

function logger(request, response, next) {
    console.log('%s %s', request.method, request.url);
    next();
}

function greeter(request, response) {
    response.setHeader('Çontent-Type', 'text/plain');
    response.end('Hello!');
}

var connect = require('connect');
var app = connect();
app
	.use(logger)
	.use(greeter)
   .listen(8080);
console.log('Connect is listening');
