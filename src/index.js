import '../public/index.html'
import './index.scss'
import '../public/util/util'
import 'script-loader!preloadjs/lib/preloadjs.js'
import 'script-loader!soundjs/lib/soundjs.js'


window.onload = () => {
  // $.init({

  // })
}

$(function () {
  $('.main').html('333')
  console.log('test')
  console.log($.pop)
  console.log($.loading())
  console.log($.cName('黄河水'))

  console.log(createjs)
})