const convert = require('color-convert')

const colors = require('./_colors')

const names = Object.getOwnPropertyNames(colors)
const result = []

names.forEach(function(name, i) {
  i > 0 && result.push('')
  result.push('  /* ' + name + ' */')
  const params = colors[name]

  params.lightness.sort(function (a, b) {
    return b - a
  })
  .forEach(function(lightness) {
    const prefix = '  --' + name + '-' + (100 - lightness) + ': '

    const rgb = convert.rgb.hsl(params.hue, params.saturation, lightness)
    result.push(prefix + 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ');')
  })
})

console.log(':root {')
console.log(result.join('\n'))
console.log('}')
