var golevka9 = {
  chunk: function chunk(ary, size = 1) {
    var result = []
    var l = (ary.length / size)
    var start = 0
    var end = size
    if (size > ary.length) {
      return ary
    }
    for(var i = 0; i < l; i++) {
      result.push(ary.slice(start, end))
      start = end
      end += size
    }
    return result
  },
  compact: function(ary) {
    var result = []
    for(var item of ary) {
      if (item) {
        result.push(item)
      }
    }
    return result
  },
  concat: function concat(arr, ...value) {
    var other = []
    var arrSum = 0
    while (arr.length > 0) {
      arrSum += arr.pop()
    }
    other.push(arrSum)
    for (var i = 0; i < value.length; i++) {
      if (typeof value[i] =='object') {
        value[i] = value[i].pop()
      }
      other.push(value[i])
    }
    return other
  },
  difference: function difference(arr, ...value) {
    let result = []
    let compare = []
    for (var i = 1; i < arguments.length; i++) {
        compare = compare.concat(arguments[i])
    }
    for (var o = 0; o < arr.length; o++) {
        if (compare.indexOf(arr[o]) === -1) {
            result.push(arr[o])
        }
    }
    return result
  },
  drop: function drop(arr, n = 1) {
    return arr.slice(n)
  },
  dropRight: function dropRight(arr, n = 1) {
    for (var i = 0; i < n; i++) {
      arr.pop()
    }
    return arr
  },
  fill: function fill(arr, value, start = 0, end = arr.length) {
    for (var i = start; i < end; i ++) {
      arr[i] = value
    }
    return arr
  },
  flatten: function flatten(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (var j = 0; j < arr[i].length; j++) {
          result.push(arr[i][j])
        }
      } else {
        result.push(arr[i])
      }
    }
    return result
  },
  flattenDeep: function flattenDeep(arr) {
    var result = []
    for (var item of arr) {
      if (Array.isArray(item)) {
        result.push(...flattenDeep(item))
      } else {
        result.push(item)
      }
    }
    return result
  },
  flattenDepth: function flattenDepth(ary, depth = 1) {
    if (depth == 0) {
      return ary.slice()
    }
    return ary.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...flattenDepth(item, depth - 1))
      } else {
        result.push(item)
      }
      return result
    }, [])
  }, 
  head: function head(arr) {
    return arr[0]
  },
  indexOf: function indexOf(arr, value, fromIndex = 0) {
    var i = 0
    if (fromIndex > 0) {
      i = fromIndex
    } else if (fromIndex < 0) {
      i = arr.length + fromIndex
    }
    for (; i < arr.length; i ++) {
      if (value == arr[i]) {
        return i
      } 
    }
    return -1
  },
  initial: function initial(arr) {
    arr.length = arr.length - 1
    return arr
  },
  join: function join(arr, separator=',') {
    var result = ""
    var l = arr.length
    for (var i = 0; i < l; i++) {
      result += arr.shift()
      if (i != l - 1) {
        result += separator
      }
    }
    return result
  },
  last: function last(arr) {
    return arr[arr.length -1]
  },
  lastIndexOf: function lastIndexOf(arr, value, fromIndex=arr.length-1) {
    for (var i = fromIndex; i >=0; i--) {
      if (arr[i] === value) {
        return i
      }
    }
    return -1
  },
  nth: function nth(arr, n = 0) {
    if (n >= 0) {
      return arr[n]
    } else {
      return arr[arr.length + n]
    }
  },
  pull: function pull(arr, ...value) {
    for (var v of value) {
      while (arr.indexOf(v) != -1) {
        var c = arr.indexOf(v)
        arr.splice(c, 1)
      }
    }
    return arr
  },
  pullAll: function pullAll(arr, value) {
    for (var v = 0; v < value.length; v++) {
      while (arr.indexOf(value[v]) != -1) {
        var c = arr.indexOf(value[v])
        arr.splice(c, 1)
      }
    }
    return arr
  },
  reverse: function reverse(arr) {
    var l = Math.floor(arr.length / 2)
    var t = 0
    for (var i = 0; i < l; i++) {
      t = arr[i]
      arr[i] = arr[arr.length -1 - i]
      arr[arr.length -1 - i] = t
    }
    return arr
  },

}
