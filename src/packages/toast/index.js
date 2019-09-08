import Toast from './toast'

/*
// https://cn.vuejs.org/v2/api/#vm-mount
const ToastConstructor = Vue.extend(Toast)

let toastCst = function (options) {
	// 这一步的目的，让toast支持两种形式的传参方式
    if (typeof options === 'string') {
        options = {
            propsData: {
                message: options
            }
        }
    }

    let instance = new ToastConstructor(options)

    document.body.appendChild(instance.$mount().$el) // 挂载到body上

    return instance // 返回自身，保证可以链式操作
}

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
Toast.install = function (Vue) {
    Vue.prototype.$toast = toastCst // 添加实例方法
}

export default Toast */

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
Toast.install = function (Vue) {
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
    var ToastComponent = Vue.extend(Toast)
    var component = new ToastComponent(options)
    document.getElementById('app').appendChild(component.$mount().$el)
  }
}

export default Toast
