// grunt-test/Gruntfile.js
module.exports = function(grunt) {

    // initialization
    grunt.initConfig({
        aConstantObject: {
            a: 1,
            b: 2,
            c: 3
        }
    });

    // alternate initialization
    grunt.config.set('anotherConstantObject', {
        d: 4,
        e: 5,
        f: 6
    });

    grunt.registerTask('mytest', function() {
        var x = grunt.config.get('aConstantObject');
        grunt.log.writeln('I\'ve added a+b+c and it totals ' + (x.a + x.b + x.c));
        var y = grunt.config.get('anotherConstantObject');
        grunt.log.writeln('I\'ve added d+e+f and it totals ' + (y.d + y.e + y.f));
    });

};
