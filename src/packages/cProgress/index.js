import cProgress from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cProgress.install = function (Vue) {
    Vue.component(cProgress.name, cProgress)
}

export default cProgress
