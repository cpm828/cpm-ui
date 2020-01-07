import cInput from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cInput.install = function (Vue) {
  Vue.component(cInput.name, cInput)
}

export default cInput
