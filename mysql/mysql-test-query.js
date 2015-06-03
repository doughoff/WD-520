// mysql-test-query.js 
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'test',
});

connection.connect();

var searchString = '%' + 'grand theft' + '%';
var queryString = 
'SELECT COUNT(*) AS totalRows FROM sacramentocrimejanuary2006 WHERE crimedescr LIKE ' + connection.escape(searchString);


connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
console.log('Number of found result rows was ', rows[0].totalRows);
});

connection.end();
