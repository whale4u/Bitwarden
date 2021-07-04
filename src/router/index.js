import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/password/index'
import Login from '@/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
