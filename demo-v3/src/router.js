import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/CaseDemo'
  }
]

// 批量引入路由
const modules = import.meta.glob('./views/*.vue', { eager: true })
Object.entries(modules).forEach(([key, _module]) => {
  const component = _module.default
  const name = /([^/]*)\.vue/.exec(key)?.[1]
  routes.push({
    name,
    path: `/${name}`,
    component
  })
})

export default createRouter({
  history: createWebHashHistory(),
  routes
})
