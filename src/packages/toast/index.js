import Toast from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
Toast.install = function (Vue) {
  if (document.getElementById('cpmToast')) return
  Vue.prototype.$toast = function (options) {
    if (typeof options === 'string') {
      options = {
        // https://cn.vuejs.org/v2/api/?#propsData
        propsData: {
          message: options
        }
      }
    }

    // https://cn.vuejs.org/v2/api/#vm-mount
    var ToastConstructor = Vue.extend(Toast)
    var component = new ToastConstructor(options)
    document.body.appendChild(component.$mount().$el)
    return component
  }
}

export default Toast
