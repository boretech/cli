module.exports = {
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
    }]
  }
}