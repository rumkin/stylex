const colors = require('./_colors')
const convert = require('color-convert')

const names = Object.getOwnPropertyNames(colors)
const result = []

names.forEach(function(name, i) {
  i > 0 && result.push('')
  result.push('// ' + name)
  result.push('export const ' + name + ' = {')

  const params = colors[name]

  params.lightness.sort(function (a, b) {
    return b - a
  })
  .forEach(function(lightness) {
    const prefix = '  ' + (100 - lightness) + ': '
    const hex = convert.hsl.hex(params.hue, params.saturation, lightness)

    result.push(prefix + '\'#' + hex +  '\',')
  })
  result.push('}')
})

console.log(result.join('\n'))
