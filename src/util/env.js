const UA = window.navigator.userAgent

const ua = window.navigator.userAgent.toLocaleLowerCase()

const isWeiXin = /MicroMessenger/gi.test(ua)

const isAndroid = /android/gi.test(ua)

const isIos = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

export {
  UA,
  ua,
  isWeiXin,
  isAndroid,
  isIos
}
