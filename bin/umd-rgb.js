const outdent = require('outdent')
const convert = require('color-convert')

const colors = require('./_colors')

const names = Object.getOwnPropertyNames(colors)
const result = [
  ';(function(root, factory) {',
  outdent`
  ${outdent}
    if (typeof module === 'object' && module.exports) {
      factory(exports)
    }
    else if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['exports'], function (exports) {
        factory((root.StylexColors = exports))
      })
    }
    else {
      // Browser globals
      factory((root.StylexColors = {}))
    }
  `,
  '})(typeof self !== \'undefined\' ? self : this, function(exports) {',
]

names.forEach(function(name, i) {
  i > 0 && result.push('')
  result.push('  // ' + name)
  result.push('  exports.' + name + ' = {')

  const params = colors[name]

  params.lightness.sort(function (a, b) {
    return b - a
  })
  .forEach(function(lightness) {
    const prefix = '    ' + lightness + ': '
    const rgb = convert.rgb.hsl(params.hue, params.saturation, (100 - lightness))

    result.push(prefix + '[' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + '],')
  })
  result.push('  }')
})
result.push('})')

console.log(result.join('\n'))
