import Dialog from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
Dialog.install = function (Vue) {
  if (document.getElementById('#cpmDialog')) return
  Vue.prototype.$dialog = function (options) {
    // https://cn.vuejs.org/v2/api/#vm-mount
    var DialogConstructor = Vue.extend(Dialog)
    var component = new DialogConstructor(options)
    document.body.appendChild(component.$mount().$el)
    return component
  }
}

export default Dialog
