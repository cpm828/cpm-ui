import cFixed from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cFixed.install = function (Vue) {
  Vue.component(cFixed.name, cFixed)
}

export default cFixed
