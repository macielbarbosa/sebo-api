const notificacao = require('test-api/samples/sampleNotificacao')

exports.notificacao401 = [
  {
    name: 'Falha ao tentar alterar notificacao de outro docente',
    verb: 'patch',
    as: 'professor',
    rota: '/api/notificacoes/:notificacaoDoDocente',
    sample: notificacao,
    status: 401,
  },
  {
    name: 'Falha ao tentar excluir notificacao de outro docente',
    verb: 'delete',
    as: 'professor',
    rota: '/api/notificacoes/:notificacaoDoDocente',
    status: 401,
  },
]
