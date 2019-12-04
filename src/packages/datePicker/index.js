import DatePicker from './DatePicker'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
