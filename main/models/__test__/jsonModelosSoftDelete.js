const fs = require('fs')
const modelosSemSoftDelete = require('server/modelos-sem-softdelete.json')

module.exports = fs
  .readdirSync('common/models')
  .filter(
    file =>
      file.includes('.json') &&
      !modelosSemSoftDelete.includes(file.replace('.json', ''))
  )
