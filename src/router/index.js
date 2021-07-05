import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/index'
import Login from '@/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  // 修改此处！解决路由不生效问题！
  mode: 'history'
})
