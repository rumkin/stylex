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
    const prefix = '  ' + lightness + ': '
    const rgb = convert.rgb.hsl(params.hue, params.saturation, (100 - lightness))

    result.push(prefix + '[' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + '],')
  })
  result.push('}')
})

console.log(result.join('\n'))
