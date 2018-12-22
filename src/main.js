// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios; // 全局注册axios


// 按需引入lodash
import orderBy from 'lodash/orderBy'
import size from 'lodash/size' // 可计算{}、[]、string的长度
// 从一个数组中取出不包含另外一个数组中的
import difference from 'lodash/difference' // 值唯一
import differenceBy from 'lodash/differenceBy' // obj中的某个键值不同（第三个参数出入某个键）
import differenceWith from 'lodash/differenceWith' // 传入方法（第三个参数是一个方法，传入了两个参数）
// 在一个数组内找唯一的
import uniq from 'lodash/uniq' // 值唯一
import uniqBy from 'lodash/uniqBy' // obj中的某个键值唯一（第二个参数出入某个键）
import uniqWith from 'lodash/uniqWith' // 传入方法（第二个参数是一个方法，传入了一个参数）

Vue.prototype._ = {
    orderBy, size,
    difference, differenceBy, differenceWith, 
    uniq, uniqBy, uniqWith
}


import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'
import '@/assets/style.css'


import App from './App'
import router from './router'
import store from "@/vuex/store"



import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Alert)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Spinner)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(Scrollbar)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message


// 使用vee-validate（会报冲突， 因为elmentui中fields属性已使用，errorBags也有可能冲突）
import VeeValidate from 'vee-validate';
const config = {
    errorBagName: 'errorBags', // change if property conflicts.
    fieldsBagName: 'fieldBags',
};
Vue.use(VeeValidate, config);


import VueBus from 'vue-bus';
Vue.use(VueBus);


// 全局路由钩子
router.beforeEach((to, from, next) => {
  console.log('main.js: beforeEach');
  window.document.title = to.meta.title ? to.meta.title : 'vue-cli-project';
  next();
})
router.beforeResolve((to, form, next) => {
  console.log('main.js: beforeResolve');
  next();
})
router.afterEach((to, from) => {
  // setTimeout(()=>{
  //     window.scrollTo(0,0);
  // }, 100);
  console.log('main.js: afterEach');
})




Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})

// index.html <== App.vue(<router-view></router-view>) <== 对应路由：/ <-> Main.vue(<router-view></router-view>) <== 对应path为空的子组件：Index.vue
