import cHeader from './cHeader'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cHeader.install = function (Vue) {
  Vue.component(cHeader.name, cHeader)
}

export default cHeader
