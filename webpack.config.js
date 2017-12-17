const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  target: 'web',
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
      test: /\.jsx?$/,
      query: {
        presets: ['react']
      }
    }, {
      loader: 'json-loader',
      test: /\.json$/
    }, {
      loader: ExtractTextPlugin.extract('css-loader', 'css?modules&localIdentName=[local]__[hash:base64:5]'),
      test: /\.css$/
    }]
  },
  resolve: {
    modules: [
      './node_modules',
      './src'
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        {
          context: path.resolve(__dirname, 'src'),
          from: '*.html',
          to: path.resolve(__dirname, 'build')
        }
    ]),
    new ExtractTextPlugin('styles.css')
  ]
}
