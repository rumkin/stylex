function range(from, to, step = 1) {
  const arr = new Array(
    Math.floor(Math.abs(to - from) / step) + 1
  )

  for (let i = 0; i < arr.length; i++) {
    arr[i] = from + i * step
  }

  return arr
}

exports.range = range
