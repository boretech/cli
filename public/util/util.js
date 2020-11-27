/*
 * @Author: allen.wong 
 * @Date: 2020-11-25 15:36:42 
 * @Last Modified by: allen.wong
 * @Last Modified time: 2020-11-27 17:55:36
 */
import pop from './popup/popup'
import check from './check'

;(function ($) {
  // 自定义jq组件
  $.extend({
    init(config) {
      // const {} = config
    },
    // popup的载入
    pop,
    // popup的二次封装，快捷调用
    loading(tip) {
      return this.pop
    },
    check,
    // 数据验证的二次封装
    cName(value) {
      return this.check('name', value)
    },
    cTel(value) {
      return this.check('tel', value)
    },
    cEmail(value) {
      return this.check('email', value)
    },
    cIdcard(value) {
      return this.check('idcard', value )
    }
  })
})($)