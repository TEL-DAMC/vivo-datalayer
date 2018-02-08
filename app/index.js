const express = require('express')
const bodyParser = require('body-parser')
const expressApp = express()
const path = require('path')
const fs = require('fs')

const parser = require('csv-parse')
const stringify = require('csv-stringify')
const util = require('util')

expressApp.use('/', express.static(path.join(__dirname, 'static')))

expressApp.use('/handsontable', express.static(path.resolve(__dirname, '../node_modules/handsontable/dist')))

expressApp.use('/csv', function (request, response) {
  const fileName = request.query.file
  const csvInputFileContent = fs.readFileSync(path.resolve(__dirname, path.join('../csv', fileName)), 'utf-8')

  const parserConfig = {
    // columns: true,
    relax_column_count: true,
    delimiter: ';',
    auto_parse: true
  }

  parser(csvInputFileContent, parserConfig, function cb (err, contents) {
    if (err) {
      console.error(err)
    } else {
      response.json(contents)
    }
  })
})

expressApp.use(bodyParser.json())
expressApp.post('/save-csv', function (request, response) {
  stringify(request.body.data, function (err, resultCsv) {
    if (!err) {
      console.log(resultCsv)
      response.json({success: true})
      const fileName = request.query.file
      fs.writeFileSync(path.resolve(__dirname, path.join('../csv', fileName)), resultCsv)
    } else {
      console.error(err)
      response.json({success: false})
    }
  })
})

// noinspection MagicNumberJS
expressApp.listen(3000, function () {
  console.log('listening')
})
