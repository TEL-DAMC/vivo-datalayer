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

      columns: window.headers.map(function (columnName, columnIndex) {
        let columnConfig = {
          type: 'autocomplete',
          source: json.map((tag) => tag[columnIndex]).sort().filter((item, index, self) => self.indexOf(item) === index)
        }
        if (columnName === 'event') {
          columnConfig.strict = true
        }
        return columnConfig
      }),

      allowInsertColumn: false,
      //allowRemoveColumn: false
    })
  })
})

function save () {
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
}

document.getElementById('save').addEventListener('click', function (event) {
  save()
})

document.getElementById('generate-js').addEventListener('click', function (event) {
  const fileName = document.getElementById('csv-name').value
  window.fetch('/generate-tags?input=' + fileName + '&output=' + fileName.replace(/\.csv$/, '.new.js')).then()
})

document.addEventListener('keydown', function (e) {
  const KEY_CODES = {
    Ctrl: 17,
    s: 83
  }
  if (e.keyCode === KEY_CODES.Ctrl) window.isCtrlDown = true
  if (e.keyCode === KEY_CODES.s && window.isCtrlDown === true) {
    save()
    e.preventDefault()
  }
})
