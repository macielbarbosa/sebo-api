const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolha')

exports.questaoCedida401 = [
  {
    name: 'Falha ao tentar deletar questão compartilhada de outro docente',
    verb: 'delete',
    as: 'docente',
    rota: '/api/questoes-cedidas/:questaoCedidaDoDocente',
    status: 401,
  },
  {
    name: 'Falha ao tentar compartilhar questão como discente',
    verb: 'get',
    as: 'discente',
    rota: '/api/questoes/:questaoDoDocente/compartilhar',
    sample: questaoMultiplaEscolha,
    status: 401,
  },
  {
    name: 'Falha ao tentar compartilhar questão como admin',
    verb: 'get',
    as: 'admin',
    rota: '/api/questoes/:questaoDoDocente/compartilhar',
    sample: questaoMultiplaEscolha,
    status: 401,
  },
]
