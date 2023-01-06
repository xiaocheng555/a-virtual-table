import Vue from 'vue'
import ElementUI from 'element-ui'
import Antd from 'ant-design-vue'
import VueResponseSize from 'vue-response-size'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(VueResponseSize)
Vue.use(Antd)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
