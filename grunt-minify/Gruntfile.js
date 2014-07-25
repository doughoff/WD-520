// grunt-minify/Gruntfile.js
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration.
    // see http://gruntjs.com/configuring-tasks
    grunt.initConfig({
        uglify: {
            options: {
                mangle: {
                    toplevel: true
                }
            },
            target1: {
                files: [{
                    expand: true,
                    cwd: 'app/js',
                    src: ['**/*.js'],
                    dest: 'dist/',
                    ext: '.min.js',
                    extDot: 'first'
                }, ],
            },
        },
    });
    grunt.registerTask('default', ['uglify']);
};
