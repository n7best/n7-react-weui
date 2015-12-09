var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/example/index.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      path:'./dist',
      publicPath: '/',
      filename: 'bundle.js'
  },
  devServer:{
      inline:true,
      contentBase: './dist'
  },
  resolve: {
    extensions: ['', '.jsx', '.less', '.js', '.json']
  },
  debug: true,
  devtool: 'source-map',
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
