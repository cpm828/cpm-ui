import cTitleBar from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cTitleBar.install = function (Vue) {
  Vue.component(cTitleBar.name, cTitleBar)
}

export default cTitleBar
