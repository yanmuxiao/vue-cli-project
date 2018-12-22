// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios; // 全局注册axios

// 按需引入lodash
import _ from './lib/lodash';
Vue.prototype._ = _;

// 按需引入图表（v-charts/echarts）350k+
import VeLine from 'v-charts/lib/line.common'
Vue.component(VeLine.name, VeLine)
import VeHistogram from 'v-charts/lib/histogram.common'
Vue.component(VeHistogram.name, VeHistogram)
// |- line.common.js  -------------- 折线图
// |- bar.common.js  --------------- 条形图
// |- histogram.common.js  --------- 柱状图
// |- pie.common.js  --------------- 饼图
// |- ring.common.js  -------------- 环图
// |- funnel.common.js  ------------ 漏斗图
// |- waterfall.common.js  --------- 瀑布图
// |- radar.common.js  ------------- 雷达图
// |- map.common.js  --------------- 地图
// |- sankey.common.js  ------------ 桑基图
// |- heatmap.common.js  ----------- 热力图
// |- scatter.common.js  ----------- 散点图
// |- candle.common.js  ------------ k线图
// |- gauge.common.js  ------------- 仪表盘
// |- tree.common.js  -------------- 树图
// |- bmap.common.js  -------------- 百度地图
// |- amap.common.js  -------------- 高德地图


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
  window.scrollTo(0,0);
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
