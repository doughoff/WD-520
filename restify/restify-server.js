//restify-server.js
var restify = require('restify');

function setDefaultHeaders(response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Movie-Quotes-From', '2001 A Space Odyssey');
    response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
}

function respond(request, response, next) {
    setDefaultHeaders(response);
    response.send('hello, HAL ' + request.params.action);
    next();
}

function refuse(request, response, next) {
    setDefaultHeaders(response);
    response.send("I'm sorry, Dave. I'm afraid I can't do that.");
    next();
}

function goodbye(request, response, next) {
    setDefaultHeaders(response);
    response.send("Dave, this conversation can serve no purpose anymore. Goodbye.");
    next();
}

var server = restify.createServer();
server.get('/hello/:action', respond);
server.post('/hello/:action', refuse);
server.head('/hello/:action', respond);
server.del('/hello/:action', goodbye)

server.pre(restify.pre.userAgentConnection()); // detect curl
server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
