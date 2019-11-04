const prova = require('test-api/samples/prova/sampleProva')

exports.provaDoConcurso422 = [
  {
    name: 'Falha criar prova no concurso com atributo template',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list',
    sample: prova,
    status: 422,
  },
]
