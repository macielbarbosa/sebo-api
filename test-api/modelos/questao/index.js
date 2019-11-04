const { questao200 } = require('./questao200')
const { questao401 } = require('./questao401')
const { questao422 } = require('./questao422')
const { questaoPublica } = require('./questaoPublica')
const { questaoNaoValidada } = require('./questaoNaoValidada')

let tests = []
tests = tests.concat(questao200)
tests = tests.concat(questao401)
tests = tests.concat(questao422)
tests = tests.concat(questaoPublica)
tests = tests.concat(questaoNaoValidada)

exports.questao = {
  model: 'questao',
  tests,
}
