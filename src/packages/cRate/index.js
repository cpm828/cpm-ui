import cRate from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cRate.install = function (Vue) {
  Vue.component(cRate.name, cRate)
}

export default cRate
