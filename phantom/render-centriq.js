// render-centriq.js
var page = require('webpage').create();
page.open('http://centriq.com/', function() {
 page.render('../centriq.png');
 phantom.exit();
});
