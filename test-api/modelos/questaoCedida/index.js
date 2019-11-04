const { questaoCedida200 } = require('./questaoCedida200')
const { questaoCedida401 } = require('./questaoCedida401')

exports.questaoCedida = {
  model: 'questaoCedida',
  tests: [...questaoCedida200, ...questaoCedida401],
}
