const { turma200 } = require('./turma200')
const { turma401 } = require('./turma401')

exports.turma = {
  model: 'turma',
  tests: [...turma200, ...turma401],
}
