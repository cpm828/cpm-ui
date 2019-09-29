import cCheckboxGroup from './cCheckboxGroup'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cCheckboxGroup.install = function (Vue) {
  Vue.component(cCheckboxGroup.name, cCheckboxGroup)
}

export default cCheckboxGroup
