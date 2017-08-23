import Vue from 'vue'
import Router from 'vue-router'
import LoginVue from '@/views/Login.vue'
import MainVue from '@/views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainVue',
      component: MainVue
    },{
      path: '/login',
      name: 'LoginVue',
      component: LoginVue
    }
  ]
})
