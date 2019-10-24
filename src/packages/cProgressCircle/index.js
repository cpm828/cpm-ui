import cProgressCircle from './cProgressCircle'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cProgressCircle.install = function (Vue) {
    Vue.component(cProgressCircle.name, cProgressCircle)
}

export default cProgressCircle
