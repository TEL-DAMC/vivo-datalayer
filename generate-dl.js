'use strict'
const fs = require('fs')
const parser = require('csv-parse')
const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('gen', 'Gera o arquivo js a partir do csv')
  .example('$0 gen -f meuvivo.csv', 'gera o arquivo meuvivo.js')
  .alias('f', 'file')
  .nargs('f', 1)
  .describe('f', 'Carrega um arquivo csv')
  .demandOption(['f'])
  .help('h')
  .alias('h', 'help')
  .argv

const inputFilePath = argv.file

const outputFilePath = argv.output || argv.file.replace(/(\.csv)$/, '.js')

const csvInputFileContent = fs.readFileSync(inputFilePath, 'utf-8')

const parserConfig = {
  columns: true,
  relax_column_count: true,
  delimiter: ';',
  auto_parse: true
}


parser(csvInputFileContent, parserConfig, function cb (err, output) {
  if (err) {
    console.error(err)
  } else {
    const tags = output.map(function (tag) {
      if (tag['event']) {
        return buildString(tag)
      }
    })
    fs.writeFileSync(outputFilePath, tags.join('\n'))
  }
})

function parseValue (str) {
  return str
}

function buildString (tag) {
  if (tag.event.includes('feature-interaction')) {
    return `
              /**
               * ${tag['FEATURE']}
               * - ${tag['MICRO-FEATURE']}
               * ${tag['TRIGGER']}
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
               * ${tag['TRIGGER']}
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
               * ${tag['TRIGGER']}
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
