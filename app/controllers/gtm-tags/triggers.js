const fs = require('fs')
const file = fs.readFileSync('./triggers.tsv', 'utf-8')

const triggers = file.split('\n')
  .map(line => line.split('\t'))
  .map(params => ({
    'accountId': '160874599',
    'containerId': '8436084',
    name: params[0],
    triggerId: Math.round(Math.random() * 10000).toString(),
    type: 'CUSTOM_EVENT',
    'customEventFilter': [
      {
        'type': 'EQUALS',
        'parameter': [
          {
            'type': 'TEMPLATE',
            'key': 'arg0',
            'value': '{{_event}}'
          },
          {
            'type': 'TEMPLATE',
            'key': 'arg1',
            'value': params[1]
          }
        ]
      }
    ],
    'filter': [
      {
        'type': 'EQUALS',
        'parameter': [
          {
            'type': 'TEMPLATE',
            'key': 'arg0',
            'value': '{{DL.feature.name}}'
          },
          {
            'type': 'TEMPLATE',
            'key': 'arg1',
            'value': params[2]
          }
        ]
      }
    ]
  }))

let json = require('./template')
json.containerVersion.trigger = triggers

fs.writeFileSync('./json.json', JSON.stringify(json), 'utf-8')
