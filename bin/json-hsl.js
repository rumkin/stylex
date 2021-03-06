const colors = require('./_colors')

const names = Object.getOwnPropertyNames(colors)
const result = []

names.forEach(function(name, i) {
  const params = colors[name]
  const isLastColor = i === names.length - 1
  result.push('  "' + name + '": {')

  params.lightness
  .forEach(function(lightness, ii) {
    const isLastLightness = ii === params.lightness.length - 1
    const prefix = '    "' + lightness + '": '
    const postfix = (isLastLightness ? '' : ',')

    result.push(prefix + '[' + params.hue + ', ' + params.saturation + ', ' + (100 - lightness) + ']' + postfix)
  })
  result.push('  }' + (isLastColor ? '' : ','))
})

console.log('{')
console.log(result.join('\n'))
console.log('}')
