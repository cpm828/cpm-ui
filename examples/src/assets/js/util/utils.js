// 通用方式使用全局变量导入
var utils = {
    ajax: function (params) {
        /*
        options = {
            url: '', //请求地址
            method: '', //方法
            datatype: '',//预期服务器返回的数据类型。如果不指定，默认为json,jsonp时为跨域请求
            jsonp: '', //跨域请求时的回调函数
            data: '', //参数
            success: '', //成功回调
            error: '',//错误回调
            async: ''//是否异步请求
        }
        */
        params = params || {}
        params.data = params.data || {}
        // var json = (params.datatype=='jsonp') ? jsonp(params) : json(params);

        // add script、css type
        switch (params.datatype) {
            case 'jsonp':
                jsonp(params)
                break
            case 'script':
                _addScript(params)
                break
            case 'css':
                _addStylesheet(params)
                break
            default :
                json(params)
        }

        // 非跨域请求
        function json (options) {
            // 默认参数
            options.url = options.url || ''
            options.method = options.method && options.method.toLowerCase() || 'get'
            options.data = options.data || ''
            options.success = options.success || ''
            options.error = options.error || ''
            options.async = options.async || true
            // get请求-拼接url
            if (options.method === 'get') {
                if (typeof options.data === 'object') {
                    var query = []
                    for (var k in options.data) {
                        query.push(k + '=' + options.data[k])
                    }
                    options.data = query.join('&')
                }
                options.url += (options.url.indexOf('?' === -1) ? '?' : '') + options.data
            }
            // post请求-转换字符串
            if (options.method === 'post') {
                if (typeof options.data === 'object') {
                    var arrs = []
                    for (var k in options.data) {
                        arrs.push(k + '=' + options.data[k])
                    }
                    options.data = arrs.join('&')
                }
            }
            // 创建发送请求
            var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP') //兼容ie
            // console.log(options.url);
            xhr.open(options.method, options.url, options.async)
            if (options.method === 'post') {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                xhr.send(options.data)
            } else {
                xhr.send(null)
            }
            // 异步请求
            if (options.async === true) {
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        callcall()
                    }
                }
            }
            // xhr.abort(); // 取消异步请求
            // 同步请求
            if (options.async === false) {
                callcall()
            }

            // 返回状态判断
            function callcall () {
                if (xhr.status === 200) {
                    options.success && typeof options.success == 'function' && options.success(JSON.parse(xhr.responseText))
                } else {
                    options.error && typeof options.error == 'function' && options.error({
                        status: xhr.status,
                        msg: xhr.statusText
                    })
                }
            }
        }

        /**
         * 引脚本
         */
        function _addScript (params) {
            // 创建script标签并加入到页面中
            var head = document.getElementsByTagName('head')[0]
            // 设置传递给后台的回调参数名
            var data = formatParams(params.data)
            var script = document.createElement('script')
            head.appendChild(script)
            script.onload = params.success || params.success()
            // 发送请求
            if (params.url.indexOf('?') > -1) {
                script.src = params.url + '&' + data
            } else {
                script.src = params.url + '?' + data
            }
        }

        /**
         * 引css
         */
        function _addStylesheet (params) {
            // 创建script标签并加入到页面中
            var head = document.getElementsByTagName('head')[0]
            var link = document.createElement('link')
            head.appendChild(link)
            link.onload = params.success || params.success()
            link.setAttribute('rel', 'stylesheet')
            link.href = params.url
        }

        // jsonp请求
        function jsonp (params) {
            // 创建script标签并加入到页面中
            var callbackName = 'rong_json' + new Date().getTime()
            var customJsonName = params.jsonp
            var head = document.getElementsByTagName('head')[0]
            if (typeof customJsonName !== 'undefined') {
                callbackName = customJsonName + '_' + callbackName
            }
            // 设置传递给后台的回调参数名
            params.data['callback'] = callbackName
            var data = formatParams(params.data)
            var script = document.createElement('script')
            head.appendChild(script)
            // 创建jsonp回调函数
            window[callbackName] = function (json) {
                head.removeChild(script)
                clearTimeout(script.timer)
                window[callbackName] = null
                params.success && params.success(json)
            }
            // 发送请求
            if (params.url.indexOf('?') > -1) {
                script.src = params.url + '&' + data
            } else {
                script.src = params.url + '?' + data
            }

            // 为了得知此次请求是否成功，设置超时处理
            if (params.time) {
                script.timer = setTimeout(function () {
                    window[callbackName] = null
                    head.removeChild(script)
                    params.error && params.error({
                        message: '超时'
                    })
                }, params.time)
            }
        }

        // 格式化参数
        function formatParams (data) {
            var arr = []
            for (var name in data) {
                arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
            }
            // 添加一个随机数，防止缓存
            arr.push('v=' + random())
            return arr.join('&')
        }

        // 获取随机数
        function random () {
            return Math.floor(Math.random() * 10000 + 500)
        }
    },
    /**
     * 操作cookie，获取或设置，value存在时为设置，否则为获取
     * @name: key
     * @value: value
     * @name: key
     * @options: 设置的参数
     */
    cookie: function (name, value, options) {
        if (typeof value !== 'undefined') { // name and value given, set cookie
            options = options || {}
            if (value === null) {
                value = ''
                options.expires = -1
            }
            var expires = ''
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date
                if (typeof options.expires == 'number') {
                    date = new Date()
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
                } else {
                    date = options.expires
                }
                expires = '; expires=' + date.toUTCString() // use expires attribute, max-age is not supported by IE
            }
            var path = options.path ? '; path=' + options.path : '; path=/'
            var domain = options.domain ? '; domain=' + options.domain : '; domain=.rong360.com'
            var secure = options.secure ? '; secure' : ''
            document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('')
        } else { // only name given, get cookie
            var reg = new RegExp('(?:^| )' + name + '=([^;]*)(;|$)'),
                result = reg.exec(document.cookie)
            return decodeURIComponent((result && result[1]) || '')
        }
    },
    /**
     * 判断是否有某个class
     * @ele: el
     * @cls: class name
     * @return: true / false
     */
    hasClass: function (ele, cls) {
        cls = cls || ''
        if (!cls.replace(/\s/g, '').length) return false // 当cls没有参数时，返回false
        return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ')
    },
    /**
     * 给元素添加class
     * @ele: el
     * @cls: class name
     */
    addClass: function (ele, cls) {
        if (!this.hasClass(ele, cls)) {
            ele.className = ele.className === '' ? cls : ele.className + ' ' + cls
        }
    },
    /**
     * 给元素删除class
     * @ele: el
     * @cls: class name
     */
    removeClass: function (ele, cls) {
        if (this.hasClass(ele, cls)) {
            var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' '
            while (newClass.indexOf(' ' + cls + ' ') >= 0) {
                newClass = newClass.replace(' ' + cls + ' ', ' ')
            }
            ele.className = newClass.replace(/^\s+|\s+$/g, '')
        }
    },
    /**
     * 获取链接参数（非hash后面的参数）
     * @key: 需要获取的key
     * @return: ''
     */
    getQueryValue: function (key) {
        var url = document.location.search
        var reg = new RegExp('(^|&|\\?|#)' + key + '=([^&#]*)(&|\x24|#)', '')
        var match = url.match(reg)
        if (match) {
            return match[2]
        }
        return null
    },
    /**
     * 空对象检测
     * @o: 传入的对象
     * @return: true / false
     */
    emptyObject: function (o) {
        if (o === null || o === undefined) return true
        if (Object.prototype.toString.call(o) === '[object Array]' && !o.length) return true // 空数组
        return !Object.keys(o).length
    },
    /**
     * 判断是否是微信环境
     * @return: true / false
     */
    isWechat: function () {
        var ua = navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) === 'micromessenger') {
            return true
        } else {
            return false
        }
    },
    /**
     * 格式化时间戳（s）
     * @sec: 时间戳，s
     * @type: ymdhms（默认） 、ymdhm
     * @return: YYYY-MM-DD HH:mm:ss, 根据type决定返回值
     */
    formatTime: function (sec, type) {
        const dateType = type || 'ymdhms'
        const date = new Date(sec * 1000)
        const Y = date.getFullYear()
        const M = `0${date.getMonth() + 1}`.slice(-2)
        const D = `0${date.getDate()}`.slice(-2)
        const h = `0${date.getHours()}`.slice(-2)
        const m = `0${date.getMinutes()}`.slice(-2)
        const s = `0${date.getSeconds()}`.slice(-2)
        if (dateType === 'ymdhm') {
            return `${Y}-${M}-${D} ${h}:${m}`
        }
        return `${Y}-${M}-${D} ${h}:${m}:${s}`
    },
    /**
     * 格式化时间戳（s）
     * @sec: 剩余时间（1天以内）
     * @return: HH:mm:ss
     */
    formatSecond: function (sec) {
        const h = `0${Math.floor(sec / 3600)}`.slice(-2)
        const m = `0${Math.floor((sec / 60) % 60)}`.slice(-2)
        const s = `0${Math.floor(sec % 60)}`.slice(-2)
        return `${h}:${m}:${s}`
    },
    /**
     * 时间加减天数，如传(1, '2019-05-20') 得2019-05-21
     * @days: 为正数表示加，负数表示减
     * @date: 起始日期，非必传，不传取几天
     * @return: YYYY-MM-DD
     */
    countDay: function (days, date) {
        const dd = date ? new Date(date) : new Date()
        dd.setDate(dd.getDate() + days)
        const y = dd.getFullYear()
        const m = `0${dd.getMonth() + 1}`.slice(-2)
        const d = `0${dd.getDate()}`.slice(-2)
        return `${y}-${m}-${d}`
    }
}

window.utils = utils
