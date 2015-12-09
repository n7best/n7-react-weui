var path = require('path');
const webpack = require('webpack');

module.exports = {
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
     ],
    noParse: [
        /node_modules\/sinon\//,
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.less', '.js', '.json'],
    alias: {
        'sinon': 'sinon/pkg/sinon'
    }
  },
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ],
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true
  },
  devtool: 'inline-source-map', // sourcemap support
  debug: true,
};