module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-usemin");

    grunt.initConfig({
        buildDir: "build/workshop",
        version: function() {
            var date = new Date();
            return "-" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds() + "-" + date.getMilliseconds();
        }(),
        watch: {
            js: {
                files: ["workshop/**/*.js"],
                tasks: ["concat"]
            },
            html: {
                files: ["workshop/**/*.html"],
                tasks: ["copy"]
            },
            css: {
                files: ["workshop/**/*.css"],
                tasks: ["copy"]
            },
            build: {
                files: ["<%= buildDir %>/app.js"],
                options: {
                    livereload: 35729
                }
            }
        },
        connect: {
            options: {
                port: 9001,
                base: "<%= buildDir %>",
                livereload: 35729

            },
            livereload: {
                options: {
                    open: true
                }
            }

        },
        concat: {
            js: {
                src: [
                    //use !(*_spec).js to include only application JS files and not unit tests
                    "bower_components/angular/angular.min.js",
                    "bower_components/angular-route/angular-route.min.js",
                    "bower_components/angular-ui-router/release/angular-ui-router.min.js",
                    "workshop/workshop.js",
                    "workshop/!(*_spec).js",
                    "workshop/list/list.js",
                    "workshop/list/!(*_spec).js",
                    "workshop/details/details.js",
                    "workshop/details/!(*_spec).js"
                ],
                dest: "<%= buildDir %>/app<%= version %>.js"
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        src: [
                            "workshop/*.html",
                            "workshop/list/*.html",
                            "workshop/details/*.html",
                            "workshop/*.css"
                        ],
                        dest: 'build'
                    }
                ]
            }
        },
        clean: ["build"],
        useminPrepare: {
            html: '<%= buildDir %>/index.html',
            options: {
                dest: '<%= buildDir %>'
            }
        },
        usemin: {
            html: ['<%= buildDir %>/index.html'],
            options: {
                dirs: ['<%= buildDir %>'],
                blockReplacements: {
                    js: function (block) {
                        var v = grunt.config.get("version");
                        return '<script type="text/javascript" src="app' + v + '.js"></script>';
                    }
                }
            }
        }

    });

    grunt.registerTask("build", ["clean", "copy", "useminPrepare", "concat", "usemin"]);

    grunt.registerTask("server", ["connect:livereload", "watch"]);


};