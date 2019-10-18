import cCountDown from './cCountDown'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
cCountDown.install = function (Vue) {
    Vue.component(cCountDown.name, cCountDown)
}

export default cCountDown
