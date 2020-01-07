import cButton from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cButton.install = function (Vue) {
  Vue.component(cButton.name, cButton)
}

export default cButton
