const editaJson = require('edit-json-file')
const { dbTestStable } = require('../test-api/db-test-stable')
const fs = require('fs')

const PATH_DATABASE = 'test-api/db-test.json'
const PATH_OUTPUT = 'test-api/.output'

var deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index) {
      var curPath = path + '/' + file
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

const mkdirAsync = path => new Promise(resolve => fs.mkdir(path, resolve))

exports.restartTestApi = async () => {
  const database = editaJson(PATH_DATABASE)
  if (fs.existsSync(PATH_OUTPUT)) await deleteFolderRecursive(PATH_OUTPUT)
  await mkdirAsync(PATH_OUTPUT)
  database.set(dbTestStable)
  database.save()
  console.log('Banco de dados de testes JSON reiniciado.')
}
