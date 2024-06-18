/* eslint-disable no-undef */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
  basePath: '',
  frameworks: ['jasmine', '@angular-devkit/build-angular'],
  plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
  ],
  client: {
      jasmine: {
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
  },
  jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
  },
  coverageReporter: {
    dir: 'coverage/',
    reporters: [
      { type: 'html', subdir: 'report-html' }, // generates HTML report
      { type: 'lcov', subdir: 'report-lcov' }, // generates lcov report
      { type: 'text-summary' } // generates summary report on the console
    ]
  },
  reporters: ['progress', 'kjhtml', 'coverage'],
  port: 9876,
  colors: true,
  logLevel: config.LOG_INFO,
  autoWatch: true,
  browsers: ['ChromeHeadless'],
  singleRun: true,
  restartOnFileChange: true
  });
};
