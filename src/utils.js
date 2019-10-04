function range(from, to, step = 1) {
  const arr = new Array(
    Math.floor(Math.abs(to - from) / step) + 1
  )

  for (let i = 0; i < arr.length; i++) {
    arr[i] = from + i * step
  }

  return arr
}

function addLightness(colors, step = 10, from = 0, to = 100) {
  const result = {}
  Object.getOwnPropertyNames(colors)
  .forEach(function(color) {
    result[color] = Object.assign({}, colors[color], {
      lightness: range(from, to, step).concat([95]),
    })
  })
  return result
}

exports.addLightness = addLightness
