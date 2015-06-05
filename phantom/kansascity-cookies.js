// kansascity-cookies.js
var webpage = require('webpage').create();

webpage.open('http://www.kansascity.com', function(status) {
    if (status === 'success') {
        phantom.cookies.forEach(function(cookie, i) {
            for (var key in cookie) {
                console.log('[cookie:' + i + '] ' + key + ' = ' +
                    cookie[key]);
            }
            console.log('-----------');
        });

        phantom.exit();
    } else {
        console.error('Could not open the page! (Is it running?)');
        phantom.exit(1);
    }
});
