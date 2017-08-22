import Vue from 'vue'
import Router from 'vue-router'
import LoginVue from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'LoginVue',
      component: LoginVue
    }
  ]
})
