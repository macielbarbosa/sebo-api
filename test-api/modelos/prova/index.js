const { prova200 } = require('./prova200')
const { prova401 } = require('./prova401')
const { prova403 } = require('./prova403')
const { prova422 } = require('./prova422')

exports.prova = {
  model: 'prova',
  tests: [...prova200, ...prova401, ...prova403, ...prova422],
}
