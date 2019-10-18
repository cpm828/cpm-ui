const UA = window.navigator.userAgent

const ua = window.navigator.userAgent.toLocaleLowerCase()

const isWeiXin = /MicroMessenger/gi.test(ua)

const isAndroid = /android/gi.test(ua)

const isIos = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

const iosVersion = isIos ? +ua.match(/cpu iphone os (.*?) like mac os/)[1].replace(/_/g, '.') : 0

export {
  UA,
  ua,
  isWeiXin,
  isAndroid,
  isIos,
  iosVersion
}
