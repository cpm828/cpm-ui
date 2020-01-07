import cIndexList from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cIndexList.install = function (Vue) {
  Vue.component(cIndexList.name, cIndexList)
}

export default cIndexList
