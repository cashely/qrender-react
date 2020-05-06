const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      } }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
