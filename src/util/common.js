// 获取链接参数值
const getQueryValue = key => {
  var url = document.location.search
  var reg = new RegExp('(^|&|\\?|#)' + key + '=([^&#]*)(&|\x24|#)', '')
  var match = url.match(reg)
  if (match) {
    return match[2]
  }
  return null
}

// 获取链接hash值
const getHashValue = key => {
  var url = document.location.hash
  var reg = new RegExp('(^|&|\\?|#)' + key + '=([^&#]*)(&|\x24|#)', '')
  var match = url.match(reg)
  if (match) {
    return match[2]
  }
  return null
}

// 判断object是否为空
const isEmptyObj = o => {
  if (o === null || o === undefined) return true
  if (
    Object.prototype.toString.call(o) === '[object Array]' && !o.length
  ) {
    return true
  }
  return !(Object.keys(o).length >= 1)
}

// 使用&拼接object
const joinObj = obj => {
  return Object.keys(obj)
    .map(item => {
      return item + '=' + obj[item]
    })
    .join('&')
}

// 格式化时间（毫秒级）
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
// 毫秒拆分，返回的h、m、s等未补充前缀0
const formatMSTime = time => {
  const d = Math.floor(time / DAY)
  const h = Math.floor((time % DAY) / HOUR)
  const m = Math.floor((time % HOUR) / MINUTE)
  const s = Math.floor((time % MINUTE) / SECOND)
  const ms = Math.floor(time % SECOND)
  return {
    d,
    h,
    m,
    s,
    ms
  }
}

export {
  getQueryValue,
  getHashValue,
  isEmptyObj,
  joinObj,
  formatMSTime
}
// 注意在import方法时不要使用@/来寻找路径，否则会在使用组件时会报错
// To install it, you can run: npm install --save @/util/common
