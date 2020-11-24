const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [{
      test: require.resolve('jquery'),
      loader: 'expose-loader',
      options: {
        exposes: {
          globalName: '$',
          override: true,
        },
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'sass-loader',
        options: {
          implementation: require("sass")
        }
      }]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/index.bundle.css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['jquery', 'index']
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /jquery/,
          name: 'jquery',
          chunks: 'all'
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  }
}