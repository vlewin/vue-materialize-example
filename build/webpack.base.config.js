var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var precss = require('precss')

module.exports = {
  entry: ['./src/main.js', './src/services/authentication.js'],
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  externals: {
    Auth0Lock: 'Auth0Lock'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },

      {
        test: /\.(scss|sass)$/,

        // loader: ExtractTextPlugin.extract(
        //   'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'
        // )

        loader: ExtractTextPlugin.extract(
          'style-loader',
          ['css-loader', 'postcss-loader', 'sass-loader']
        )
      },

      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },

  vue: {
    loaders: {
      js: 'babel!eslint',

      sass: 'style!css!sass?indentedSyntax',

      // scss: 'style!css!sass',
      // scss: ExtractTextPlugin.extract(
      //   'style-loader', 'css-loader', 'sass-loader'
      // ),

      scss: 'style!css!sass',
      autoprefixer: {
        browsers: ['last 2 versions']
      }
    }

  },

  postcss: function () {
    return [autoprefixer, precss]
  },

  eslint: {
    formatter: require('eslint-friendly-formatter')
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Hammer: 'hammerjs/hammer'
    })
  ]
}
