const { testData } = require('test-api/testData')

const questao = require('test-api/samples/questao/questaoMultiplaEscolha')

const { ids } = testData

exports.notificacao200 = [
  {
    name: 'Criar questão para compartilhar para gerar notificação',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questao,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocente = res.body.id
      done()
    },
  },

  {
    name: 'Compartilhar a questão para gerar notificação',
    verb: 'get',
    as: 'docente',
    to: 'professor',
    rota: '/api/questoes/:questaoDoDocente/compartilhar',
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoCedidaDoDocente = res.body.questaoCedida.id
      done()
    },
  },

  {
    name: 'Busca nova notificacao criada para professor que recebeu a questão compartilhada',
    verb: 'get',
    as: 'professor',
    rota: '/api/usuarios/:professor/notificacoes',
    status: 200,
    func: (err, res, done) => {
      res.body[0].status.should.equal('nova')
      ids.notificacaoDoDocente = res.body[0].id

      done()
    },
  },
  {
    name: 'Altera notificacao como docente',
    verb: 'patch',
    as: 'professor',
    rota: '/api/notificacoes/:notificacaoDoDocente',
    sample: { status: 'nova' },
    status: 200,
    func: (err, res, done) => {
      const dados = res.body
      dados.status.should.equal('nova')
      done()
    },
  },
  {
    name: 'Altera notificacao para lida como docente',
    verb: 'get',
    as: 'professor',
    rota: '/api/notificacoes/:notificacaoDoDocente/marcar-lida',
    status: 200,
    func: (err, res, done) => {
      const dados = res.body
      dados.notificacao.status.should.equal('lida')
      done()
    },
  },
  {
    name: 'Altera notificacao para não lida como docente',
    verb: 'get',
    as: 'professor',
    rota: '/api/notificacoes/:notificacaoDoDocente/marcar-nao-lida',
    status: 200,
    func: (err, res, done) => {
      const dados = res.body
      dados.notificacao.status.should.equal('nova')
      done()
    },
  },
  {
    name: 'Excluir notificacao',
    verb: 'delete',
    as: 'professor',
    rota: '/api/notificacoes/:notificacaoDoDocente',
    status: 200,
  },

  {
    name: 'Excluir questao cedida',
    verb: 'delete',
    as: 'professor',
    rota: '/api/questoes-cedidas/:questaoCedidaDoDocente',
    status: 200,
    func: (err, res, done) => {
      done()
    },
  },
]
