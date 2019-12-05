import Dialog from './dialog'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
Dialog.install = function (Vue) {
  Vue.prototype.$dialog = function (options) {
    // https://cn.vuejs.org/v2/api/#vm-mount
    var DialogConstructor = Vue.extend(Dialog)
    var component = new DialogConstructor(options)
    document.getElementById('app').appendChild(component.$mount().$el)
    return component
  }
}

export default Dialog