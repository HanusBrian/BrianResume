express = require('express');
app = express();

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            html: {
                files: ['app/*.html', '/app'],
                tasks: [],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['public/style/*.css'],
                tasks: [],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['public/style/*.js'],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['server', 'watch']);

    grunt.registerTask('server', 'Start a custom web server', function () {
        grunt.log.writeln('Started web server on port 3001 for autoreload');
        require('./app/main.js').listen(3001);
    });

};