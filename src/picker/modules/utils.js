// c = element to scroll to or top position in pixels
// e = duration of the scroll in ms, time scrolling
// d = (optative) ease function. Default easeOutCuaic
function scrollTo(a, c, e, d) {
  d || (d = easeOutCuaic)
  a = a || document.documentElement
  if (0 === a.scrollTop) {
    var b = a.scrollTop
    ++a.scrollTop
    a = b + 1 === a.scrollTop-- ? a : document.body
  }
  b = a.scrollTop
  0 >= e ||
    ('object' === typeof b && (b = b.offsetTop),
    'object' === typeof c && (c = c.offsetTop),
    (function(a, b, c, f, d, e, h) {
      function g() {
        0 > f || 1 < f || 0 >= d
          ? (a.scrollTop = c)
          : ((a.scrollTop = b - (b - c) * h(f)), (f += d * e), setTimeout(g, e))
      }

      g()
    })(a, b, c, 0, 1 / e, 20, d))
}

function easeOutCuaic(t) {
  t--
  return t * t * t + 1
}

let toString = Object.prototype.toString,
  hasOwnProperty = Object.prototype.hasOwnProperty
const tools = {
  isFunction: function(obj) {
    return toString.call(obj) === '[object Function]'
  },
  isArray: function(obj) {
    return toString.call(obj) === '[object Array]'
  },

  isPlainObject: function(obj) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    if (
      !obj ||
      toString.call(obj) !== '[object Object]' ||
      obj.nodeType ||
      obj.setInterval
    ) {
      return false
    }

    // Not own constructor property must be Object
    if (
      obj.constructor &&
      !hasOwnProperty.call(obj, 'constructor') &&
      !hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')
    ) {
      return false
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.

    var key
    for (key in obj);

    return key === undefined || hasOwnProperty.call(obj, key)
  }
}

/*
 * jQuery extend function
 * https://gist.github.com/bentsai/3150936
 */
const extend = function() {
  var options,
    name,
    src,
    copy,
    copyIsArray,
    clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target
    target = arguments[1] || {}
    // skip the boolean and the target
    i = 2
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== 'object' && !tools.isFunction(target)) {
    target = {}
  }

  // extend jQuery itself if only one argument is passed
  if (length === i) {
    target = this
    --i
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) !== null) {
      // Extend the base object
      for (name in options) {
        src = target[name]
        copy = options[name]

        // Prevent never-ending loop
        if (target === copy) {
          continue
        }

        // Recurse if we're merging plain objects or arrays
        if (
          deep &&
          copy &&
          (tools.isPlainObject(copy) || (copyIsArray = tools.isArray(copy)))
        ) {
          if (copyIsArray) {
            copyIsArray = false
            clone = src && tools.isArray(src) ? src : []
          } else {
            clone = src && tools.isPlainObject(src) ? src : {}
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy)

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }

  // Return the modified object
  return target
}

export default {
  scrollTo,
  extend
}
