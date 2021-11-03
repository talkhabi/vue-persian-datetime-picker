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

/**
 * Simple helper for clone an Array of dates (in moment)
 * @param arr Array
 * @returns Array
 */
export const cloneDates = arr => arr.map(d => d.clone())

/**
 * Check if two dates are on the same day
 * @param a Moment date
 * @param b Moment date
 * @returns {boolean}
 */
export const isSameDay = (a, b) => {
  a = a.clone().set({ h: 12, m: 0 })
  return Math.abs(a.diff(b, 'hours')) < 20
}

/**
 * full clone using JSON.stringify
 * @param obj
 * @returns {any}
 */
export const clone = obj => JSON.parse(JSON.stringify(obj))

/**
 * https://stackoverflow.com/a/51029299/3183699
 * @param element
 * @param duration
 * @param callback
 */
export const scrollIntoCenter = function(element, duration = 200, callback) {
  const parent = element.parentNode
  let startingTop = parent.scrollTop
  let parentCenter = parent.offsetHeight / 2
  let elementCenter = element.offsetHeight / 2
  let distance = element.offsetTop - startingTop - parentCenter + elementCenter
  let start
  const done = () => {
    if (typeof callback === 'function') {
      callback()
    }
  }

  if (!duration) {
    parent.scrollTo(0, startingTop + distance)
    done()
    return
  }

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    let time = timestamp - start
    let percent = Math.min(time / duration, 1)
    parent.scrollTo(0, startingTop + distance * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    } else {
      done()
    }
  })
}

export const addEventListener = function(el, type, handler) {
  if (typeof el === 'string') el = document.querySelector(el)
  if (!el) throw new Error('Cant find custom element: ' + el)
  if (el.addEventListener) el.addEventListener(type, handler, true)
  else el.attachEvent('on' + type, handler, true)
}

export const addLiveEvent = function(selector, event, callback, context) {
  addEventListener(context || document, event, function(e) {
    if (e.target.closest(selector)) callback.call(e.target, e)
  })
}

export default { extend, clone }
