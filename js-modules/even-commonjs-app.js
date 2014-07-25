// even-commonjs-app.js
var isEven = require(['./even-commonjs'], function(require) {
    console.log(1, isEven(1));
    console.log(2, isEven(2));
    console.log(3, isEven(3));
    console.log(4, isEven(4));
});
