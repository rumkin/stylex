const colors = require('./_colors')
const convert = require('color-convert')

const names = Object.getOwnPropertyNames(colors)
const result = []

names.forEach(function(name, i) {
  const params = colors[name]
  const isLastColor = i === names.length - 1
  result.push('  "' + name + '": {')

  params.lightness.sort(function (a, b) {
    return b - a
  })
  .forEach(function(lightness, ii) {
    const isLastLightness = ii === params.lightness.length - 1
    const prefix = '    "' + (100 - lightness) + '": '
    const postfix = (isLastLightness ? '' : ',')
    const hex = convert.hsl.hex(params.hue, params.saturation, lightness)

    result.push(prefix + '"#' + hex +  '"' + postfix)
  })
  result.push('  }' + (isLastColor ? '' : ','))
})

console.log('{')
console.log(result.join('\n'))
console.log('}')
