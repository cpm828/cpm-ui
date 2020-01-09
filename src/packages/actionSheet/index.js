import ActionSheet from './Index.vue'

// https://cn.vuejs.org/v2/guide/plugins.html#开发插件
ActionSheet.install = function (Vue) {
  if (document.getElementById('#cpmActionSheet')) return
  Vue.prototype.$actionSheet = function (options) {
    // https://cn.vuejs.org/v2/api/#vm-mount
    var ActionSheetConstructor = Vue.extend(ActionSheet)
    var component = new ActionSheetConstructor(options)
    document.body.appendChild(component.$mount().$el)
    return component
  }
}

export default ActionSheet
