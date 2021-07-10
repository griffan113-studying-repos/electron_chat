const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      process: "process/browser"
    },
  },
  plugins: [
    // new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
    })
  ],
  entry: './electron/main.ts',
  module: {
    rules: require('./rules.webpack'),
  }
}