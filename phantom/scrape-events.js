var webpage = require('webpage').create();

webpage.viewportSize = { width: 1280, height: 800 };

webpage.open('http://www.centriq.com/', function(status) {
 if (status === 'fail') {
 console.error('webpage did not open successfully');
 phantom.exit(1);
 }

 var pageText = webpage.evaluate(function() {
 	return document.getElementById('events').textContent;
 });
 console.log(pageText);

 phantom.exit();
});
