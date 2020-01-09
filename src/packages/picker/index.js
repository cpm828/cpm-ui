import cPicker from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cPicker.install = function (Vue) {
  if (document.getElementById('#cpmPicker')) return
  Vue.component(cPicker.name, cPicker)
}

export default cPicker
