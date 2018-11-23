import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/Main'], resolve),
      children: [
          { 
            path: '', // 子组件路由path不带 '/'，默认子组件路由path为空
            component: resolve => require(['@/views/Index'], resolve),
            meta: {
              title: '首页'
            }
          },
          { 
            path: 'index', 
            component: resolve => require(['@/views/Index'], resolve),
            meta: {
              title: '首页'
            }
          },
          { 
            path: 'layout', 
            component: resolve => require(['@/views/basic/Layout'], resolve), 
            name: 'layout',
            meta: {
              title: 'layout'
            }
          },
          { 
            path: 'color', 
            component: resolve => require(['@/views/basic/Color'], resolve), 
            name: 'color',
            meta: {
              title: 'color'
            }
          },
          { 
            path: 'typography', 
            component: resolve => require(['@/views/basic/Typography'], resolve), 
            name: 'typography',
            meta: {
              title: 'typography'
            }
          },
          { 
            path: 'icon', 
            component: resolve => require(['@/views/basic/Icon'], resolve), 
            name: 'icon',
            meta: {
              title: 'icon'
            }
          },
          { 
            path: 'button', 
            component: resolve => require(['@/views/basic/Button'], resolve), 
            name: 'button',
            meta: {
              title: 'button'
            }
          },
          { path: 'radio', component: resolve => require(['@/views/form/Radio'], resolve), name: 'radio'},
          { path: 'checkbox', component: resolve => require(['@/views/form/Checkbox'], resolve), name: 'checkbox'},
          { path: 'input', component: resolve => require(['@/views/form/Input'], resolve), name: 'input'},
          { path: 'inputNumber', component: resolve => require(['@/views/form/InputNumber'], resolve), name: 'inputNumber'},
          { path: 'select', component: resolve => require(['@/views/form/SelectLabel'], resolve), name: 'select'},
          { path: 'cascader', component: resolve => require(['@/views/form/Cascader'], resolve), name: 'cascader'},
          { path: 'switch', component: resolve => require(['@/views/form/Switch'], resolve), name: 'switch'},
          { path: 'slider', component: resolve => require(['@/views/form/Slider'], resolve), name: 'slider'},
          { path: 'timePicker', component: resolve => require(['@/views/form/TimePicker'], resolve), name: 'timePicker'},
          { path: 'datePicker', component: resolve => require(['@/views/form/DatePicker'], resolve), name: 'datePicker'},
          { path: 'dateTimePicker', component: resolve => require(['@/views/form/DateTimePicker'], resolve), name: 'dateTimePicker'},
          { path: 'upload', component: resolve => require(['@/views/form/Upload'], resolve), name: 'upload'},
          { path: 'rate', component: resolve => require(['@/views/form/Rate'], resolve), name: 'rate'},
          { path: 'colorPicker', component: resolve => require(['@/views/form/ColorPicker'], resolve), name: 'colorPicker'},
          { path: 'transfer', component: resolve => require(['@/views/form/Transfer'], resolve), name: 'transfer'},
          { path: 'form', component: resolve => require(['@/views/form/FormVue'], resolve), name: 'form'},


          { path: 'table', component: resolve => require(['@/views/data/Table'], resolve), name: 'table'},
          { path: 'tag', component: resolve => require(['@/views/data/Tag'], resolve), name: 'tag'},
          { path: 'progress', component: resolve => require(['@/views/data/Progress'], resolve), name: 'progress'},
          { path: 'tree', component: resolve => require(['@/views/data/Tree'], resolve), name: 'tree'},
          { path: 'pagination', component: resolve => require(['@/views/data/Pagination'], resolve), name: 'pagination'},
          { path: 'badge', component: resolve => require(['@/views/data/Badge'], resolve), name: 'badge'},
          
          { path: 'alert', component: resolve => require(['@/views/notice/Alert'], resolve), name: 'alert'},
          { path: 'loading', component: resolve => require(['@/views/notice/Loading'], resolve), name: 'loading'},
          { path: 'message', component: resolve => require(['@/views/notice/Message'], resolve), name: 'message'},
          { path: 'messageBox', component: resolve => require(['@/views/notice/MessageBox'], resolve), name: 'messageBox'},
          { path: 'notification', component: resolve => require(['@/views/notice/Notification'], resolve), name: 'notification'},
          { path: 'editForm', name: 'editForm', component: resolve => require(['@/views/edit-form'], resolve)},
          { 
            path: 'syncTask', 
            name: 'syncTask', 
            component: resolve => require(['@/views/sync-task'], resolve),
            meta: {
              title: '用户列表'
            }
          },
          { path: 'dxhdList', component: resolve => require(['@/views/dxhd/dxhdIndex'], resolve)},
          { path: 'activityNewEdit', name: 'activityNewEdit', component: resolve => require(['@/views/dxhd/activityNewEdit'], resolve)},
      ]
    },
    {
      path: '/login',
      name: 'LoginVue',
      component: resolve => require(['@/views/Login'], resolve),
      meta: {
        title: '登录'
      }
    }
    
  ],
  // scrollBehavior(to, from,savedPosition) {
  //   return {
  //     x: 0,
  //     y: 0
  //   }
  // }
})
