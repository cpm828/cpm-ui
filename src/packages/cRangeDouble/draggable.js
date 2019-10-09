const supportTouch = 'ontouchstart' in window // 判断是使用touch还是mouse事件
let isDragging = false

export default function (el, options) {
  // touchstart / mousedown
  const startFn = function (event) {
    if (isDragging) return

    // 监听移动和离开
    document.addEventListener(supportTouch ? 'touchmove' : 'mousemove', moveFn)
    document.addEventListener(supportTouch ? 'touchend' : 'mouseup', endFn)

    // 阻止其他事件
    document.onselectstart = function () { return false }
    document.ondragstart = function () { return false }

    isDragging = true

    if (options.start) {
      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  }

  // touchmove / mousemove
  const moveFn = function (event) {
    if (options.drag) {
      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  }

  // touchend / mouseup
  const endFn = function (event) {
    // 移除所有的事件
    document.removeEventListener(supportTouch ? 'touchstart' : 'mousedown', startFn)
    document.removeEventListener(supportTouch ? 'touchmove' : 'mousemove', moveFn)
    document.removeEventListener(supportTouch ? 'touchend' : 'mouseup', endFn)

    // 重置
    document.onselectstart = null
    document.ondragstart = null
    isDragging = false // 离开时重置flag
    if (options.end) {
      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  }

  el.addEventListener(supportTouch ? 'touchstart' : 'mousedown', startFn)
}
