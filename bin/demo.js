const pug = require('pug')
const path = require('path')

const colors = {
  hsl: require(path.resolve(__dirname, '../build/hsl/colors.json')),
  hex: require(path.resolve(__dirname, '../build/hex/colors.json')),
  rgb: require(path.resolve(__dirname, '../build/rgb/colors.json')),
}

console.log(
  pug.renderFile(
    path.resolve(__dirname, '../var/template.pug'),
    {colors}
  )
)
