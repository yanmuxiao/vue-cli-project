import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)




import LoginVue from '@/views/Login.vue'
import MainVue from '@/views/Main.vue'



export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainVue',
      component: MainVue,
      children: [
      ]
    },{
      path: '/login',
      name: 'LoginVue',
      component: LoginVue
    }
  ]
})
