import cFooter from './cFooter'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cFooter.install = function (Vue) {
  Vue.component(cFooter.name, cFooter)
}

export default cFooter
