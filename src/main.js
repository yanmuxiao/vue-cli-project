// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/vuex/store"


import 'element-ui/lib/theme-default/index.css'
import babelpolyfill from 'babel-polyfill'

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate)


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
