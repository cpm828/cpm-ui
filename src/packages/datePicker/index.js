import DatePicker from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
DatePicker.install = function (Vue) {
  if (document.getElementById('#cpmDatePicker')) return
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
