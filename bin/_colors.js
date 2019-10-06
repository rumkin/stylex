const {range} = require('../src/utils')
const allColors = require('../colors')

function addLightness(colors, step = 10, from = 0, to = 100) {
  const result = {}
  Object.getOwnPropertyNames(colors)
  .forEach(function(color) {
    result[color] = Object.assign({}, colors[color], {
      lightness: range(from, to, step),
    })
  })
  return result
}

module.exports = addLightness(allColors, 5, 5, 90)
