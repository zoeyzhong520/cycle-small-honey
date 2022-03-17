import App from './App'
import store from 'store/store.js'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// Bmob
var Bmob = require('public/Bmob-2.2.5.min.js')
Bmob.initialize("bae1904c0b5293ee", "TQ9os7")
// 当小程序开发的时候，有时在手机端不便看出请求的网址，与参数，可以初始化后开启调试模式，开启后会请求到测试服务器，并打印调试信息。注意：上线后请关闭此选项
// Bmob.debug(true)
// 挂载到全局使用
Vue.prototype.$bmob = Bmob

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif