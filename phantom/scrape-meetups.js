// scrape-events.js 
var webpage = require('webpage').create();

webpage.viewportSize = {
    width: 1280,
    height: 800
};

webpage.open('http://www.meetup.com/find/?keywords=javascript&radius=50&userFreeform=Kansas+City%2C+MO', function(status) {
    if (status === 'fail') {
        console.error('webpage did not open successfully');
        phantom.exit(1);
    }

    var pageText = webpage.evaluate(function() {
        return document.getElementById('C_page').textContent;
    });
    console.log(pageText);

    phantom.exit();
});
