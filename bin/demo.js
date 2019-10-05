const pug = require('pug')
const path = require('path')

const colors = require(path.resolve(__dirname, '../build/hsl/colors.json'))

console.log(
  pug.renderFile(
    path.resolve(__dirname, '../var/template.pug'),
    {colors}
  )
)
