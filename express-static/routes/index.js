var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/hello', function(req, res, next) {
    res.render('index', {
        title: 'Hello!'
    });
});

router.get('/hello/:name', function(req, res, next) {
    res.render('index', {
        title: 'Hello, ' + req.params.name + '!'
    });
});

var studentDir = './student/';
router.get('/1', function(req, res, next) {
    res.sendFile(studentDir + 'page1.html', {
        root: '.'
    });
});

module.exports = router;
