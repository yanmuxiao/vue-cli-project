import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)




import LoginVue from '@/views/Login.vue'
import MainVue from '@/views/Main.vue'
import IndexVue from '@/views/Index.vue'

// basic
import LayoutVue from '@/views/basic/Layout.vue'
import ColorVue from '@/views/basic/Color.vue'
import TypographyVue from '@/views/basic/Typography.vue'
import IconVue from '@/views/basic/Icon.vue'
import ButtonVue from '@/views/basic/Button.vue'


// form
import RadioVue from '@/views/form/Radio.vue'
import CheckboxVue from '@/views/form/Checkbox.vue'
import InputVue from '@/views/form/Input.vue'
import InputNumberVue from '@/views/form/InputNumber.vue'
import SelectVue from '@/views/form/SelectLabel.vue'
import CascaderVue from '@/views/form/Cascader.vue'
import SwitchVue from '@/views/form/Switch.vue'
import SliderVue from '@/views/form/Slider.vue'
import TimePickerVue from '@/views/form/TimePicker.vue'
import DatePickerVue from '@/views/form/DatePicker.vue'
import DateTimePickerVue from '@/views/form/DateTimePicker.vue'
import UploadVue from '@/views/form/Upload.vue'
import RateVue from '@/views/form/Rate.vue'
import ColorPickerVue from '@/views/form/ColorPicker.vue'
import TransferVue from '@/views/form/Transfer.vue'
import FormVue from '@/views/form/Form.vue'


// import syncTask from '@/views/sync-task.vue'
// import editForm from '@/views/edit-form.vue'



export default new Router({
  routes: [
    {
      path: 'main',
      name: 'MainVue',
      component: MainVue,
      children: [
          { path: '', component: IndexVue},
          { path: '/index', component: IndexVue},
          { path: '/layout', component: LayoutVue, name: 'layout'},
          { path: '/color', component: ColorVue, name: 'color'},
          { path: '/typography', component: TypographyVue, name: 'typography'},
          { path: '/icon', component: IconVue, name: 'icon'},
          { path: '/button', component: ButtonVue, name: 'button'},


          { path: '/radio', component: RadioVue, name: 'radio'},
          { path: '/checkbox', component: CheckboxVue, name: 'checkbox'},
          { path: '/input', component: InputVue, name: 'input'},
          { path: '/inputNumber', component: InputNumberVue, name: 'inputNumber'},
          { path: '/select', component: SelectVue, name: 'select'},
          { path: '/cascader', component: CascaderVue, name: 'cascader'},
          { path: '/switch', component: SwitchVue, name: 'switch'},
          { path: '/slider', component: SliderVue, name: 'slider'},
          { path: '/timePicker', component: TimePickerVue, name: 'timePicker'},
          { path: '/datePicker', component: DatePickerVue, name: 'datePicker'},
          { path: '/dateTimePicker', component: DateTimePickerVue, name: 'dateTimePicker'},
          { path: '/upload', component: UploadVue, name: 'upload'},
          { path: '/rate', component: RateVue, name: 'rate'},
          { path: '/colorPicker', component: ColorPickerVue, name: 'colorPicker'},
          { path: '/transfer', component: TransferVue, name: 'transfer'},
          { path: '/form', component: FormVue, name: 'form'},
      ]
    },{
      path: '/login',
      name: 'LoginVue',
      component: LoginVue
    }
  ]
})
