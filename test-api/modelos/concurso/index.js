const { concurso200 } = require('./concurso200')
const { concurso401 } = require('./concurso401')
const { concurso422 } = require('./concurso422')
const { questaoDoConcurso200 } = require('./questaoDoConcurso200')
const { questaoDoConcurso422 } = require('./questaoDoConcurso422')
const { provaDoConcurso200 } = require('./provaDoConcurso200')
const { provaDoConcurso422 } = require('./provaDoConcurso422')
const { cadernoDoConcurso200 } = require('./cadernoDoConcurso200')
const { cadernoDoConcurso422 } = require('./cadernoDoConcurso422')

exports.concurso = {
  model: 'concurso',
  tests: [
    ...concurso200,
    ...questaoDoConcurso200,
    ...provaDoConcurso200,
    ...cadernoDoConcurso200,
    ...concurso401,
    ...concurso422,
    ...questaoDoConcurso422,
    ...provaDoConcurso422,
    ...cadernoDoConcurso422,
  ],
}
