const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolha')

exports.questao401 = [
  {
    name: 'Falha ao tentar alterar questão de outro docente',
    verb: 'patch',
    as: 'professor',
    rota: '/api/questoes/:questaoDoDocente',
    sample: { enunciado: 'a', tagsVirtuais: [] },
    status: 401,
  },
  {
    name: 'Falha ao tentar deletar questão de outro docente',
    verb: 'delete',
    as: 'professor',
    rota: '/api/questoes/:questaoDoDocente',
    status: 401,
  },
  {
    name: 'Falha ao tentar criar questão como discente',
    verb: 'post',
    as: 'discente',
    rota: '/api/questoes',
    sample: questaoMultiplaEscolha,
    status: 401,
  },
  {
    name: 'Falha ao tentar criar questão como admin',
    verb: 'post',
    as: 'admin',
    rota: '/api/questoes',
    sample: questaoMultiplaEscolha,
    status: 401,
  },
]
