const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',

  output: {
    path: './js',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { warnings: false }
    }),

    new CopyWebpackPlugin([
      {
        from: 'index.html',
        to: '../build'
      },

      {
        from: 'css',
        to: '../build/css'
      },

      {
        from: 'img',
        to: '../build/img'
      },

      {
        from: 'js/bundle.js',
        to: '../build/js'
      }
    ])
  ],

  resolve: {
    extension: ['', '.js']
  }
};
