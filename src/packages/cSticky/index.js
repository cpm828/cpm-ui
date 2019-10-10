import cSticky from './cSticky'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cSticky.install = function (Vue) {
  Vue.component(cSticky.name, cSticky)
}

export default cSticky
