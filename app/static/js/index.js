document.getElementById('load').addEventListener('click', function (e) {
  const fileName = document.getElementById('csv-name').value
  window.fetch('/csv?file=' + fileName).then(function (response) {
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
      colHeaders: window.headers,
      contextMenu: true,

      allowInsertColumn: false,
      //allowRemoveColumn: false
    })
  })
})

document.getElementById('save').addEventListener('click', function (event) {
  let sendableData = window.csvData.slice()
  sendableData.unshift(window.headers)
  const fileName = document.getElementById('csv-name').value
  window.fetch('/save-csv?file=' + fileName, {
    method: 'POST',
    body: JSON.stringify({data: sendableData}),
    headers: new window.Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
    .catch(error => {
      window.alert('Ocorreu um erro ao salvar.')
      console.error('Error:', error)
    })
    .then(response => {
      /** @namespace response.success */
      if (response.success === true) {
        window.alert('Arquivo salvo com sucesso: ' + fileName)
      }
      console.log('Response:', response)
    })
})

document.getElementById('generate-js').addEventListener('click', function (event) {
  window.fetch('/generate-tags?input=example.csv&output=example.new.js').then()
})
