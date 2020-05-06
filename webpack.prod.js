const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: {
    index: './index.js'
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'qrender-react',
    libraryTarget: 'commonjs2'
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
