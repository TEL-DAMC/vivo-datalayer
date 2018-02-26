'use strict'
const fs = require('fs')
const csvParse = require('csv-parse')
const generateTag = require('./methods/generate-tag')

exports.generate = function (inputPath, outputPath) {
  outputPath = outputPath || inputPath.replace(/(\.csv)$/, '.js')

  const csvInputFileContent = fs.readFileSync(inputPath, 'utf-8')

  csvToJs(csvInputFileContent, function (err, jsContent) {
    if (err) {
      console.error(err)
    } else {
      const standard = require('standard')
      fs.writeFileSync(outputPath, standard.lintTextSync(jsContent, ({fix: true})).results[0].output)
    }
  })
}

function csvToJs (csvInputFileContent, cb) {
  const csvParserConfig = {
    columns: true,
    relax_column_count: true,
    delimiter: ',',
    auto_parse: true
  }
  csvParse(csvInputFileContent, csvParserConfig, function (err, objectFromCsv) {
    if (err) {
      cb(err)
    } else {
      const jsTags = objectFromCsv.map(function (tag) {
        console.log(tag)
        return tag['event'] ? buildTag(tag) : undefined
      })
      cb(null, jsTags.join('\n'))
    }
  })
}

function buildTag (tag) {
  const tagName = tag.event.replace(/['"]/g, '')
  return generateTag(tagName, tag)
}
