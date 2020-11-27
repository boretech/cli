module.exports = {
  plugins: [
    require('autoprefixer'),
    ['postcss-px-to-viewport', {
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 6,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['non-'],
      minPixelValue: 1,
      replace: true
    }]
  ]
}