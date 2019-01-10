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
  }
}
