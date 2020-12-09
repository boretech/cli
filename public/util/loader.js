import 'script-loader!preloadjs/lib/preloadjs.js'
import 'script-loader!soundjs/lib/soundjs.js'

export default {
  cfg: {},
  init(cfg) {
    for (let key in cfg) {

    }
    this.cfg = cfg
  },
  show() {
    console.log(createjs)
    console.log(this.load)
  }
}