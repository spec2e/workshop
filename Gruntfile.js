module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.initConfig({
        watch: {
            js: {
                files: ["workshop/**/*.js"],
                tasks: ["test"],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            options: {
                port: 9001,
                base: "workshop",
                livereload: 35729

            },
            livereload: {
                options: {
                    open: true
                }
            }

        }
    });

    grunt.registerTask("server", function () {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

}
;