// TODO: Incluir um campo para seleção do arquivo a abrir
window.fetch('/csv?file=example.csv').then(function (response) {
  return response.json()
}).then(function (json) {
  /**
   * window.csvData
   * @type {array}
   */
  window.csvData = json
  /**
   * window.headers
   * @type {array}
   */
  window.headers = json.shift()
  /**
   * CONTAINER
   * @type {HTMLElement}
   */
  const CONTAINER = document.getElementById('table-container')
  window.THE_TABLE = new window.Handsontable(CONTAINER, {
    data: json,
    colHeaders: headers,
    contextMenu: true,

    allowInsertColumn: false,
    //allowRemoveColumn: false
  })
})
document.getElementById('save').addEventListener('click', function (event) {
  let sendableData = window.csvData.slice()
  sendableData.unshift(window.headers)
  // TODO: Incluir um campo para nome do arquivo
  window.fetch('/save-csv?file=example.csv', {
    method: 'POST',
    body: JSON.stringify({data: sendableData}),
    headers: new window.Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
})

document.getElementById('generate-js').addEventListener('click', function (event) {
  window.fetch('/generate-tags?input=example.csv&output=example.new.js').then()
})
