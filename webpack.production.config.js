var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/example/index.js',
  ],
  output: {
      path:'./dist',
      filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.less', '.js', '.json']
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      { 
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ]
  }
};
