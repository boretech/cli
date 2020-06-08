const fs = require('fs') // fs模块，node的文件操作
const config = require('./config') // 项目配置
const {
  series, // 同步执行
  parallel, // 异步执行
  src,
  dest
} = require('gulp')
const babel = require('gulp-babel') // babel转义工具
const browserSync = require('browser-sync').create() // 本地服务器
const replace = require('gulp-html-replace') // html内容替换
const clean = require('gulp-clean') // 项目文件删除

const browserify = () => src('src/main.js').pipe(babel()).pipe(dest('src/tmp/main.js'))

const service = () => {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
}

/**
 * 获取项目配置的html细节，生成html替换参数
 * 
 * @param {Object} config 
 * 
 * @returns {Object} data
 */

const replaceData = config => {
  let data = {}
  if (config.author) {
    data.author = {
      src: config.author,
      tpl: '<meta name="author" content="%s">'
    }
  }

  if (config.title) {
    data.title = {
      src: config.title,
      tpl: '<title>%s</title>\n'
    }
  }

  let css = [],
    js = []

  for (let key in config.libs) {
    if (config.libs[key].available) {
      if (config.libs[key].path.css) {
        css.push(config.libs[key].path.css)
      }
      if (config.libs[key].path.js) {
        js.push(config.libs[key].path.js)
      }
    }
  }
  data.css = css
  data.js = js
  console.log(data)
  return data
}

/**
 * 
 * 清除原有的index.html
 */
const backup = () => src('src/index.html').pipe(dest('backup'))

const cleanHtml = () => src('src/index.html', {
  read: false,
  allowEmpty: true
}).pipe(clean())

const init = () => src('public/index.html').pipe(replace(replaceData(config))).pipe(dest('src'))

exports.init = series(backup, cleanHtml, init)
exports.serve = series(service)
exports.backup = backup