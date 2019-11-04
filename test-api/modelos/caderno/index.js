const { caderno200 } = require('./caderno200')
const { caderno401 } = require('./caderno401')
const { caderno422 } = require('./caderno422')

exports.caderno = {
  model: 'caderno',
  tests: [...caderno200, ...caderno401, ...caderno422],
}
