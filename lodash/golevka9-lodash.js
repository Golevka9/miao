var golevka9 = {
  chunk: function chunk(ary, size = 1) {
    var result = []
    for(var i = 0; i< ??; i++) {
      result.push(ary.slice(i, i + size))
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
