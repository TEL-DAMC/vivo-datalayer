'use strict'
const fs = require('fs')
const csvParse = require('csv-parse')

exports.generate = function (inputPath, outputPath) {
  outputPath = outputPath || inputPath.replace(/(\.csv)$/, '.js')

  const csvInputFileContent = fs.readFileSync(inputPath, 'utf-8')

  csvToJs(csvInputFileContent, function (err, jsContent) {
    if (err) {
      console.error(err)
    } else {
      fs.writeFileSync(outputPath, jsContent)
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
      console.log(jsTags)
      cb(null, jsTags.join('\n'))
    }
  })
}

function parseValue (str) {
  return str
}

function buildTag (tag) {
  if (tag.event.includes('feature-interaction')) {
    return `
              /**
               * ${tag['FEATURE']}
               * - ${tag['MICRO-FEATURE']} 
               * - Momento do disparo: ${tag['TRIGGER']}
               */
              dataLayer.push({
                event: ${parseValue(tag['event'])},
                feature: {
                  name: ${parseValue(tag['feature.name'])},
                  type: ${parseValue(tag['feature.type'])},
                  step: {
                    name: ${parseValue(tag['step.name'])},
                    index: ${parseValue(tag['step.index'])},
                    type: ${parseValue(tag['step.type'])},
                    success: ${parseValue(tag['step.success'])}
                  }
                },
                interaction: {
                  name: ${parseValue(tag['interaction.name'])},
                  value: ${parseValue(tag['interaction.value'])}
                }
              })
              `
  } else if (tag.event.includes('feature-step')) {
    return `
              /**
               * ${tag['FEATURE']}
               * - ${tag['MICRO-FEATURE']} 
               * - Momento do disparo: ${tag['TRIGGER']}
               */
              dataLayer.push({
                event: ${parseValue(tag['event'])},
                feature: {
                  name: ${parseValue(tag['feature.name'])},
                  type: ${parseValue(tag['feature.type'])},
                  step: {
                    name: ${parseValue(tag['step.name'])},
                    index: ${parseValue(tag['step.index'])},
                    type: ${parseValue(tag['step.type'])},
                    success: ${parseValue(tag['step.success'])}
                  }
                }
              }) 
              `
  } else if (tag.event.includes('interface-message')) {
    return `
              /**
               * ${tag['FEATURE']}
               * - ${tag['MICRO-FEATURE']} 
               * - Momento do disparo: ${tag['TRIGGER']}
               */
              dataLayer.push({
                event: 'interface-message',
                message: {
                  type: ${parseValue(tag['message.name'])},
                  /**
                   * Name of the warning.
                   * Please try to consider including the field that showed the error.
                   */
                  name: string,
                  /**
                   * Warning code, if available
                   */
                  code: string
                },
                /**
                 * The element that diplays the error, when available
                 */
                element: HTMLElement
              })  
              `
  } else {
    console.warn('Evento não reconhecido: ', tag.event)
  }
}
