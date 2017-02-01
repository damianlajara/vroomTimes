'use strict';

import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const APP_PATH = path.resolve(__dirname, 'app');

const config = {
  devtool: 'source-map',
  entry: [
    'bootstrap-loader', // For prod: bootstrap-loader/extractStyles
    APP_PATH // By default it looks for index.js
  ],
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_PATH,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader', options: { includePaths: [ path.join(APP_PATH, 'src', 'styles') ] } }
          ]
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        use: 'imports-loader?jQuery=jquery'
      },
    ]
  },
  resolve: {
    modules: [
      APP_PATH,
      'node_modules'
    ],
    extensions: ['.jsx', '.js'] // Allows us to include js and jsx files without specifying the extension
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        // Need context and option to resolve right context url-loader when using bootstrap
        context: __dirname,
        output: { path :  './' }, //This has to be './' and not your output folder.
        postcss: [
          autoprefixer,
          precss
        ]
      }
    }),
    new ExtractTextPlugin({ filename: 'styles.css' }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
export default config;
