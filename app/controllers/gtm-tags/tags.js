const fs = require('fs')
const file = fs.readFileSync('./tags.tsv', 'utf-8')

const tags = file.split('\n')
  .map(line => line.split('\t'))
  .map(params => ({
    'accountId': '160874599',
    'containerId': '8436084',
    name: params[0],
    tagId: Math.round(Math.random() * 10000).toString(),
    type: 'ua',
    'parameter': [
      {
        'type': 'BOOLEAN',
        'key': 'nonInteraction',
        'value': params[3] ? 'true' : 'false'
      },
      {
        'type': 'BOOLEAN',
        'key': 'overrideGaSettings',
        'value': 'false'
      },
      {
        'type': 'TEMPLATE',
        'key': 'eventCategory',
        'value': params[1]
      },
      {
        'type': 'TEMPLATE',
        'key': 'trackType',
        'value': 'TRACK_EVENT'
      },
      {
        'type': 'TEMPLATE',
        'key': 'gaSettings',
        'value': '{{Google Analytics Settings}}'
      },
      {
        'type': 'TEMPLATE',
        'key': 'eventAction',
        'value': params[2]
      },
      {
        'type': 'TEMPLATE',
        'key': 'eventLabel',
        'value': params[3]
      }
    ]
  }))

let json = require('./template')
json.containerVersion.tag = tags

fs.writeFileSync('./json.json', JSON.stringify(json), 'utf-8')
