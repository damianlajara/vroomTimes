// TODO: Extract Text Plugin should only be used in prod since it disables Hot Reload!
// I abstracted the config to its own file. Now all that's left to do is to correctly
// use this config when NODE ENV is prod

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var APP_PATH = path.resolve(__dirname, 'app');
var DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(APP_PATH, 'index.js')
  ],
  output: {
    path: DIST_PATH,
    filename: 'bundle.js',
    publicPath: DIST_PATH
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_PATH,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  sassLoader: {
    includePaths: [path.join(APP_PATH, 'src', 'styles')]
  },
  postcss () {
    return [ autoprefixer, precss ];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
};
