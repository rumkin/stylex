const colors = require('./_colors')

const names = Object.getOwnPropertyNames(colors)
const result = []

names.forEach(function(name, i) {
  i > 0 && result.push('')
  result.push('// ' + name)
  result.push('export const ' + name + ' = {')

  const params = colors[name]

  params.lightness
  .forEach(function(lightness) {
    const prefix = '  ' + lightness + ': '

    result.push(prefix + '[' + params.hue + ', ' + params.saturation + ', ' + lightness + '],')
  })
  result.push('}')
})

console.log(result.join('\n'))
