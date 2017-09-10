var webpack = require('webpack');
var path = require('path');

var BUILD = path.resolve(__dirname, 'build'); /* src/client/public */
var APP = path.resolve(__dirname, 'app'); /* src/client/app */

var config = {
  entry: APP + '/App.jsx',
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: BUILD,
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include : APP,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;



/*var config = {
  entry: APP + '/index.jsx',
  output: {
    path: BUILD,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP,
        loader : "babel-loader"
      }
    ]
  }
};

module.exports = config;*/