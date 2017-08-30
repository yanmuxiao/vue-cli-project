// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/vuex/store"


import 'element-ui/lib/theme-default/index.css'

import { 
	Form, FormItem,
	Checkbox,CheckboxGroup,
	Button, ButtonGroup ,
	DatePicker, 
	Input, Select, Option, 
	Upload,  Tabs, TabPane,
	Radio, RadioGroup, Tag, 
	Step, Steps,
	Menu, Submenu, MenuItem, MenuItemGroup
} from 'element-ui'


Vue.use(Form)
Vue.use(FormItem)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Button)
Vue.use(ButtonGroup)



Vue.use(DatePicker)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Upload)

Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Tag)
Vue.use(Steps)
Vue.use(Step)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)





import VeeValidate from 'vee-validate';
Vue.use(VeeValidate)


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
