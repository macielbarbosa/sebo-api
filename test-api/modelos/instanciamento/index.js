const { instanciamento200 } = require('./instanciamento200')
const { instanciamento422 } = require('./instanciamento422')
const { instanciamento401 } = require('./instanciamento401')

let tests = []
tests = tests.concat(instanciamento200)
tests = tests.concat(instanciamento422)
tests = tests.concat(instanciamento401)

exports.instanciamento = {
  model: 'instanciamento',
  tests,
}
