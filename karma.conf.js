var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack' ]
    },

    reporters: [ 'dots' ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query:
          {
            presets: ['es2015', 'react']
          }
        }]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
