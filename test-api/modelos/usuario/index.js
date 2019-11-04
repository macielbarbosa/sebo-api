const { usuario200 } = require('./usuario200')
const { usuario401 } = require('./usuario401')
const { usuario422 } = require('./usuario422')
const { usuario403 } = require('./usuario403')
const { usuario404 } = require('./usuario404')
const { usuario400 } = require('./usuario400')
exports.usuario = {
  model: 'usuario',
  tests: [...usuario200, ...usuario400, ...usuario401, ...usuario422, ...usuario403, ...usuario404],
}
