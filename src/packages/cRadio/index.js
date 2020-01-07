import cRadio from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cRadio.install = function (Vue) {
  Vue.component(cRadio.name, cRadio)
}

export default cRadio
