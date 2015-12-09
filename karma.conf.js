const webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
  var configs = {
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-webpack'
    ],
    reporters: ['dots'],
    preprocessors: {'tests.webpack.js': ['webpack']},
    webpack: webpackConfig,
    webpackServer: {
      noInfo: false
    },
    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },
      colors: true,
  logLevel: config.LOG_DEBUG
  };
  if (process.env.TRAVIS) {
    configs.browsers = ['Chrome_travis_ci'];
  }

  config.set(configs);
};