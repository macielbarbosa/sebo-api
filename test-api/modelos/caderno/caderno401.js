const caderno = require('test-api/samples/prova/sampleProva')

exports.caderno401 = [
  {
    name: 'Falha ao criar caderno como discente',
    verb: 'post',
    as: 'discente',
    rota: '/api/cadernos/',
    sample: caderno,
    status: 401,
  },
  {
    name: 'Falha ao criar caderno como admin',
    verb: 'post',
    as: 'admin',
    rota: '/api/cadernos/',
    sample: caderno,
    status: 401,
  },
  {
    name: 'Falha ao tentar alterar caderno de outro docente',
    verb: 'patch',
    as: 'professor',
    rota: '/api/cadernos/:cadernoDoDocente',
    sample: caderno,
    status: 401,
  },
  {
    name: 'Falha ao tentar excluir caderno de outro docente',
    verb: 'delete',
    as: 'professor',
    rota: '/api/cadernos/:cadernoDoDocente',
    status: 401,
  },
]
