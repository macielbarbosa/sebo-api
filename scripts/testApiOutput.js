const editaJson = require('edit-json-file')

exports.addToOutput = fileName => mensagem => {
  const path = `test-api/.output/${fileName}.json`
  let arquivo = editaJson(path)
  arquivo.set(mensagem.id, mensagem)
  arquivo.save()
}

exports.resetOutput = fileName => {
  const path = `test-api/.output/${fileName}.json`
  let arquivo = editaJson(path)
  arquivo.empty()
  arquivo.save()
}
