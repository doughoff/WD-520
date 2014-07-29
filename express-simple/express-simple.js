// express-simple.js

var express = require('express');
var app = express();

function hello(request, response) {
    response.send('Hello!');
}

function startListening() {
    console.log('Using address ', server.address().address);
    console.log('Listening on port %d', server.address().port);
}

app.get('/', hello)
var server = app.listen(8080, startListening);
