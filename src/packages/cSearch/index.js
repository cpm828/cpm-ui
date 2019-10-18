import cSearch from './cSearch'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cSearch.install = function (Vue) {
    Vue.component(cSearch.name, cSearch)
}

export default cSearch
