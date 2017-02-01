import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const APP_PATH = path.resolve(__dirname, 'app');

const config = {
  devtool: 'source-map',
  loglevel: 'debug',
  entry: [
    'bootstrap-loader', // For prod: bootstrap-loader/extractStyles
    path.join(APP_PATH, 'index.js'),
  ],
  entry: path.join(APP_PATH, 'index.js'),
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_PATH,
        loader: 'babel'
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
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: 'imports-loader?jQuery=jquery'
      },
    ]
  },
  sassLoader: {
    includePaths: [path.join(APP_PATH, 'src', 'styles')]
  },
  postcss () {
    return [ autoprefixer, precss ];
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin()
  ]
};

export default config;
