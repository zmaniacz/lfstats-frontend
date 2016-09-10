const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './index',
  ],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  externals: {
    'Config': JSON.stringify(process.env.ENV === 'production' ? {
      serverUrl: "http://lfstats.com/api/"
    } : {
      serverUrl: "http://lfstats.app/api/"
    })
  }
};
