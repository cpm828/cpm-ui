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

export { getQueryValue, getHashValue, isEmptyObj, joinObj }
