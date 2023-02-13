import { createApp } from 'vue'
import App from '@/App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from './router.js'

const app = createApp(App)
app.use(Antd)
app.use(ElementPlus)
app.use(Router)
app.mount('#app')
