import ActionSheet from './Index.vue'

// 添加pushstate、replacestate监听事件
const bindEventListener = function (type) {
  const historyEvent = history[type]
  return function () {
    const newEvent = historyEvent.apply(this, arguments)
    const e = new Event(type.toLowerCase()) // pushState -> pushstate
    e.arguments = arguments
    window.dispatchEvent(e)
    return newEvent
  }
}
history.pushState = bindEventListener('pushState')
history.replaceState = bindEventListener('replaceState')

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
