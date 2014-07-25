// even-global-ns.js
var App = App || {};
App.isEven = function(i) {
    return i % 2 === 0;
};
