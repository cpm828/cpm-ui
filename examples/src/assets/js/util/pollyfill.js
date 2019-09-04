// Pollyfill

/* Object.assign Pollyfill */
if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
        'use strict'
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object')
        }

        target = Object(target)
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index]
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
        }
        return target
    }
}

/* Object.keys Pollyfill */
if (!Object.keys) {
    Object.keys = (function () {
        'use strict'
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
            dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            dontEnumsLength = dontEnums.length

        return function (obj) {
            if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
                throw new TypeError('Object.keys called on non-object')
            }

            var result = [], prop, i

            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop)
                }
            }

            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i])
                    }
                }
            }
            return result
        }
    }())
}

/* Array.findIndex Pollyfill */
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }

            var o = Object(this)

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function')
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1]

            // 5. Let k be 0.
            var k = 0

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k]
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k
                }
                // e. Increase k by 1.
                k++
            }

            // 7. Return -1.
            return -1
        }
    })
}

/* Array.includes Pollyfill */
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (valueToFind, fromIndex) {

            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this)

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0

            // 3. If len is 0, return false.
            if (len === 0) {
                return false
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0)

            function sameValueZero (x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
            }

            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(valueToFind, elementK) is true, return true.
                if (sameValueZero(o[k], valueToFind)) {
                    return true
                }
                // c. Increase k by 1.
                k++
            }

            // 8. Return false
            return false
        }
    })
}
