const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.jsx'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    libraryExport: 'default',
    library: 'qrender-react',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react'
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
    new CleanWebpackPlugin()
  ]
}
