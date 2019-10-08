import cRange from './cRange'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cRange.install = function (Vue) {
  Vue.component(cRange.name, cRange)
}

export default cRange
