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

    result.push(prefix + 'hsl(' + params.hue + ', ' + params.saturation + '%, ' + lightness + '%);')
  })
})

console.log(':root {')
console.log(result.join('\n'))
console.log('}')
