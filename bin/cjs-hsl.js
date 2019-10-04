const colors = require('./_colors')

const names = Object.getOwnPropertyNames(colors)
const result = []

names.forEach(function(name, i) {
  i > 0 && result.push('')
  result.push('// ' + name)
  result.push('exports.' + name + ' = {')

  const params = colors[name]

  params.lightness.sort(function (a, b) {
    return b - a
  })
  .forEach(function(lightness) {
    const prefix = '  ' + (100 - lightness) + ': '

    result.push(prefix + '[' + params.hue + ', ' + params.saturation + ', ' + lightness + '],')
  })
  result.push('}')
})

console.log(result.join('\n'))
