const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

function generateTag (tagName, tagContent) {
  Handlebars.registerHelper('tag', function (field) {
    return tagContent[field] || 'string'
  })

  Handlebars.registerHelper('obj-from-string', function (string, type) {
    console.log(string)
    return string ? '{' + string.split(',').map(key => `${key}:${type}`).join(',') + '}' : 'undefined'
  })

  const templateFilePath = path.join(__dirname, './templates/', tagName + '.hbs')
  const templateFile = fs.readFileSync(templateFilePath, 'utf8')
  const template = Handlebars.compile(templateFile)

  return template({metrics: tagContent['metrics'], dimensions: tagContent['dimensions']})
}

module.exports = generateTag
