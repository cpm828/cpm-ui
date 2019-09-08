import cIcon from './cIcon'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cIcon.install = function (Vue) {
  Vue.component(cIcon.name, cIcon)
}

export default cIcon
