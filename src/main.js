import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api'
import VueProgressBar from 'vue-progressbar'
import 'element-ui/lib/theme-chalk/index.css'
import { Menu, MenuItem, Form, FormItem, Input,
  Button, Message, Submenu } from 'element-ui'

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Submenu)
// Vue.use(Message)

Vue.prototype.$message = Message

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
  color: '#20a0ff',
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

const user = api.SDK.User.current()
console.log(user)

if (user) {
  store.commit('setUser', user)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
