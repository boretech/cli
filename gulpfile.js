const {
  series,
  parallel,
  src,
  dest
} = require('gulp')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()

const browserify = () => src('src/main.js').pipe(babel()).pipe(dest('src/tmp/main.js'))

const service = () => {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
}

exports.browserify = browserify
exports.serve = series(browserify, service)