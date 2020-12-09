const webpack = require('webpack')
const {
  merge
} = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      PROD: JSON.stringify(false)
    })
  ]
})