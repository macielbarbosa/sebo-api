const concurso = require('test-api/samples/prova/sampleProva')

exports.concurso401 = [
  {
    name: 'Falha ao criar concurso como discente',
    verb: 'post',
    as: 'discente',
    rota: '/api/concursos/',
    sample: concurso,
    status: 401,
  },
  {
    name: 'Falha ao criar concurso como admin',
    verb: 'post',
    as: 'admin',
    rota: '/api/concursos/',
    sample: concurso,
    status: 401,
  },
  {
    name: 'Falha ao tentar alterar concurso de outro docente',
    verb: 'patch',
    as: 'professor',
    rota: '/api/concursos/:concursoDoDocente',
    sample: concurso,
    status: 401,
  },
  {
    name: 'Falha ao tentar excluir concurso de outro docente',
    verb: 'delete',
    as: 'professor',
    rota: '/api/concursos/:concursoDoDocente',
    status: 401,
  },
]
