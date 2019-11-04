const { testData } = require('test-api/testData')

const questao = require('test-api/samples/questao/questaoMultiplaEscolha')

const { ids } = testData

exports.questaoCedida200 = [
  {
    name: 'Criar questão para compartilhar',
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
    name: 'Compartilhar a questão',
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
    name: 'Listar questoes cedidas para o professor',
    verb: 'get',
    as: 'professor',
    rota: '/api/usuarios/:professor/questoes-cedidas',
    status: 200,
    func: (err, res, done) => {
      res.body[0].id.should.equal(ids.questaoCedidaDoDocente)
      done()
    },
  },

  {
    name: 'Aceitar questao cedida para o professor',
    verb: 'get',
    as: 'professor',
    rota: '/api/questoes-cedidas/:questaoCedidaDoDocente/aceitar',
    status: 200,
    func: (err, res, done) => {
      res.body.data.usuarioId.should.equal(ids.professor)
      if (res.status === 200) ids.questaoCompartilhada = res.body.data.id
      done()
    },
  },

  {
    name: 'Buscar a questão compartilhada',
    verb: 'get',
    as: 'professor',
    rota: '/api/questoes/:questaoCompartilhada',
    status: 200,
    func: (err, res, done) => {
      res.body.id.should.equal(ids.questaoCompartilhada)
      res.body.usuarioId.should.equal(ids.professor)
      done()
    },
  },

  {
    name: 'Criar outra questão para compartilhar e ser negada',
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
    name: 'Compartilhar a questão novamente',
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
    name: 'Rejeitar questao cedida para o professor',
    verb: 'get',
    as: 'professor',
    rota: '/api/questoes-cedidas/:questaoCedidaDoDocente/rejeitar',
    status: 200,
    func: (err, res, done) => {
      res.body.rejeitada.should.equal(true)
      done()
    },
  },
]
