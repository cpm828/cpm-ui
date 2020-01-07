import cSwitch from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cSwitch.install = function (Vue) {
  Vue.component(cSwitch.name, cSwitch)
}

export default cSwitch
