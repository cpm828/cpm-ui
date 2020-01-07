import cRadioGroup from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cRadioGroup.install = function (Vue) {
  Vue.component(cRadioGroup.name, cRadioGroup)
}

export default cRadioGroup
