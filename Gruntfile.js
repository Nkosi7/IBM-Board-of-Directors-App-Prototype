module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        modernizr: {
            dist: {
                "crawl": false,
                "customTests": [],
                "dest": "assets/js/modernizr-output.js",
                "tests": [
                    "cookies",
                    "customevent",
                    "exiforientation",
                    "forcetouch",
                    "fullscreen",
                    "geolocation",
                    "hiddenscroll",
                    "history",
                    "indexeddb",
                    "json",
                    "video",
                    "animation",
                    "cssanimations",
                    "borderimage",
                    "borderradius",
                    "generatedcontent",
                    "cssgradients",
                    "multiplebgs",
                    "cssresize",
                    "rgba",
                    "cssscrollbar",
                    "shapes",
                    "supports",
                    "csstransforms",
                    "csstransforms3d",
                    "preserve3d",
                    "cssvalid",
                    "dataset",
                    "es5",
                    "strictmode",
                    "es6object",
                    "speechrecognition",
                    "svgclippaths",
                    "svgfilters",
                    "inlinesvg",
                    "webworkers"
                ],
                "options": [
                    "setClasses"
                ],
                "uglify": false
            }
        },
        sass: {
            dev: {
                files: {
                    'assets/css/styling.css': 'assets/css/*.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            livereload: {
                files: ['*'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            options: {
                port: 8000,
                livereload: true,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        './'
                    ]
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8000/'
            },
            build: {
                path: 'http://localhost:8000/'
            }
        }
    });
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks("grunt-modernizr");
    // grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['sass:dev', 'modernizr:dist', 'connect', 'open:dev', 'watch']);
    // grunt.registerTask('default', ['watch']);
};
