import Loading from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
Loading.install = function (Vue) {
  if (document.getElementById('#cpmLoading')) return
  Vue.prototype.$loading = function (options) {
    if (typeof options === 'number') {
      options = {
        // https://cn.vuejs.org/v2/api/?#propsData
        propsData: {
          type: options
        }
      }
    }
    // https://cn.vuejs.org/v2/api/#vm-mount
    var LoadingConstructor = Vue.extend(Loading)
    var component = new LoadingConstructor(options)
    document.body.appendChild(component.$mount().$el)
    return component
  }
}

export default Loading
