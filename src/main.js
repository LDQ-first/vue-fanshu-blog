import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api'
import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false

// 浏览器的 Console 中设置 localStorage
localStorage.setItem('debug', 'leancloud*') // 开启调试日志

Vue.mixin({
  beforeCreate () {
    if (!this.$api) {
      this.$api = api
    }
  }
})

const options = {
  color: 'rgb(143, 255, 199)',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '1',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
