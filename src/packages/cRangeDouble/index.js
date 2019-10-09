import cRangeDouble from './cRangeDouble'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cRangeDouble.install = function (Vue) {
  Vue.component(cRangeDouble.name, cRangeDouble)
}

export default cRangeDouble
