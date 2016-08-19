var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './app/driver.js',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      },
      { test: /\.handlebars$/,
        loader: "handlebars-loader" ,
        query: {
          helperDirs: [
            __dirname + '/source/assets/javascripts/handlebars-helpers'
          ]
        }
      },
    ]
  },
  output: {
    path: __dirname + '/static/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({_: 'underscore'}),
    HTMLWebpackPluginConfig
  ],
  resolve: {
    modulesDirectories: [__dirname + '/node_modules'],
    root: __dirname + '/app'
  },
  resolveLoader: {
    root: __dirname + '/node_modules'
  },
  extensions: ["", ".webpack.js", ".web.js", ".js", ".es6.js", ".json"]
};