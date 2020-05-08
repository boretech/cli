const libs = [
  // swiper
  {
    css: '//cdn.pannacloud.com/swiper/5.3.7/swiper.min.css',
    js: '//cdn.pannacloud.com/swiper/5.3.7/swiper.min.js'
  },
  // better-scroll
  {
    js: '//cdn.pannacloud.com/better-scroll/1.15.2/better-scroll.js'
  }
]

const addSource = libs => {
  const head = document.getElementsByTagName('head')[0]

  for (let item of libs) {
    if (item.css) {
      let link = document.createElement('link')
      link.href = item.css
      link.rel = 'stylesheet'
      head.appendChild(link)
    }
    if (item.js) {
      let script = document.createElement('script')
      script.src = item.js
      head.appendChild(script)
    }
  }
}

addSource(libs)