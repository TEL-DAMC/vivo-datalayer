'use strict'
var argv = require('yargs')
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

var fs = require('fs')
var util = require('util')
var parser = require('csv-parse')

var contents = fs.readFileSync(argv.file, 'utf-8')
console.log(contents)

parser(contents, {columns: true}, function cb (err, output) {
  if (err) {
    console.error(err)
  } else {
    console.log(util.inspect(output))
  }
})
