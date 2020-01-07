import cCheckbox from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cCheckbox.install = function (Vue) {
  Vue.component(cCheckbox.name, cCheckbox)
}

export default cCheckbox
