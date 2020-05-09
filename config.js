const config = {
  author: 'panna',
  title: '般若模板',
  loading: 20,  // 1 - 30
  libs: {
    animate: {
      available: true,
      path: {
        css: '//cdn.pannacloud.com/animate/4.0.0/animate.min.css'
      }
    },
    swiper: {
      available: true,
      path: {
        css: '//cdn.pannacloud.com/swiper/5.3.7/swiper.min.css',
        js: '//cdn.pannacloud.com/swiper/5.3.7/swiper.min.js'
      }
    },
    betterScroll: {
      available: true,
      path: {
        js: '//cdn.pannacloud.com/better-scroll/1.15.2/better-scroll.js'
      }
    }
  },
  aspx: '<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="_2019_wukuang_0827_inv_index" %>'
}

module.exports = config