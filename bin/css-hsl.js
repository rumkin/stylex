const colors = require('./_colors')

const names = Object.getOwnPropertyNames(colors)
const result = []

names.forEach(function(name, i) {
  i > 0 && result.push('')
  result.push('  /* ' + name + ' */')
  const params = colors[name]

  params.lightness
  .forEach(function(lightness) {
    const prefix = '  --' + name + '-' + lightness + ': '

    result.push(prefix + 'hsl(' + params.hue + ', ' + params.saturation + '%, ' + (100 - lightness) + '%);')
  })
})

console.log(':root {')
console.log(result.join('\n'))
console.log('}')
