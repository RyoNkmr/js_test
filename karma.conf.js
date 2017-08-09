// Karma configuration
// Generated on Tue Jul 25 2017 12:41:04 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'sinon',
      'fixture',
    ],


    // list of files / patterns to load in the browser
    files: [
      'config.mocha.js',
      'app/**/*.js',
      'spec/**/*.js',
      'spec/**/*.html',
    ],


    // list of files to exclude
    exclude: [
      'app/isExistQuerySelector.js',
      'spec/isExistQuerySelector.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': ['webpack'],
      'spec/**/*.js': ['webpack'],
      'spec/**/*.html': ['html2js'],
      'spec/**/*.json': ['json_fixtures'],
    },

    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
