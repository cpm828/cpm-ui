/**
 * 键盘失焦回弹指令
 * <input v-springBack />
 * bug：iOS微信浏览器input失去焦点时无法自动回弹
 * 原理：focus的时候缓存当前的滚动条高度，blur的失败scrollTo该值
 */

export default {
  springBack: {
    bind (el, binding) {
      const ua = window.navigator.userAgent
      if (!(/iphone|ipad/gi.test(ua))) return

      function focusEvent () {
        el.__keyboardState__ = 1
        el.__scrollTop__ = document.documentElement.scrollTop || document.body.scrollTop
      }
      function blurEvent () {
        el.__keyboardState__ = 0
        /**
         * 假如我们在input框的后面增加clear icon，不做处理时点击clear icon，键盘会失焦收起，这种体验肯定是不好的
         * 通常情况我们会在点击clear icon的时候，增加input.focus()，执行流程是click->blur->focus
         * 该指令中如果在blur时直接执行回弹，就会出现问题，故增加__keyboardState__记录当前状态，再延迟判断执行回弹操作
         */
        setTimeout(() => {
          if (!el.__keyboardState__) window.scrollTo(0, el.__scrollTop__)
        }, 10)
      }
      el.__vueInputFocus__ = focusEvent
      el.__vueInputBlur__ = blurEvent
      el.addEventListener('focus', focusEvent)
      el.addEventListener('blur', blurEvent)
    },
    // 元素销毁的时候的会触发解绑
    unbind (el, binding) {
      const ua = window.navigator.userAgent
      if (!(/iphone|ipad/i.test(ua) && /(micromessenger)\//.test(ua))) return

      el.removeEventListener('focus', el.__vueInputFocus__)
      el.removeEventListener('blur', el.__vueInputBlur__)
      delete el.__vueInputFocus__
      delete el.__vueInputBlur__
      delete el.__scrollTop__
    }
  }
}
