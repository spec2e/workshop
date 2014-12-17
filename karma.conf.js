module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'workshop/bower_components/angular/angular.js',
            'workshop/bower_components/angular-route/angular-route.js',
            'workshop/bower_components/angular-ui-router/release/angular-ui-router.js',
            'workshop/bower_components/angular-mocks/angular-mocks.js',
            'workshop/workshop.js',
            'workshop/list/list.js',
            'workshop/details/details.js',
            'workshop/**/*.js',
            'workshop/**/*_spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
