const { testData } = require('test-api/testData')

const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolha')
const questaoBloco = require('test-api/samples/questao/questaoBloco')

const { ids } = testData

exports.questaoPublica = [
  {
    name: 'Criar questão de multipla escolha para tornar pública',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoMultiplaEscolha,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocente = res.body.id
      done()
    },
  },

  {
    name: 'Tornar questão de multipla escolha pública',
    verb: 'patch',
    as: 'docente',
    rota: '/api/questoes/:questaoDoDocente',
    sample: { publico: true },
    status: 200,
    func: (err, res, done) => {
      res.body.publico.should.equal(true)
      done()
    },
  },

  {
    name: 'Listar questões públicas como docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/questoes/questoes-publicas',
    status: 200,
    func: (err, res, done) => {
      res.body.forEach(questao => {
        questao.publico.should.equal(true)
      })
      done()
    },
  },
  {
    name: 'Listar questões públicas como professor',
    verb: 'get',
    as: 'professor',
    rota: '/api/questoes/questoes-publicas',
    status: 200,
    func: (err, res, done) => {
      res.body.forEach(questao => {
        questao.publico.should.equal(true)
      })
      done()
    },
  },

  {
    name: 'Professor copia questão pública de multipla escolha',
    verb: 'get',
    as: 'professor',
    rota: '/api/questoes/:questaoDoDocente/copiar',
    status: 200,
    func: (err, res, done) => {
      done()
    },
  },

  {
    name: 'Contar questões públicas como docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/questoes/questoes-publicas/count',
    status: 200,
  },
  {
    name: 'Erro ao listar questões públicas como discente',
    verb: 'get',
    as: 'discente',
    rota: '/api/questoes/questoes-publicas',
    status: 401,
  },
  {
    name: 'Erro ao editar questão pública de outro usuário',
    verb: 'patch',
    as: 'professor',
    rota: '/api/questoes/:questaoDoDocente',
    sample: { enunciado: '<p> Teste de invasão.</p>' },
    status: 401,
  },
  {
    name: 'Editar sua própria questão pública',
    verb: 'patch',
    as: 'docente',
    rota: '/api/questoes/:questaoDoDocente',
    sample: { enunciado: '<p> Teste de invasão na minha questão.</p>' },
    status: 200,
  },

  {
    name: 'Tranformar questão pública em questão privada',
    verb: 'patch',
    as: 'docente',
    rota: '/api/questoes/:questaoDoDocente',
    sample: { publico: false },
    status: 200,
    func: (err, res, done) => {
      res.body.publico.should.equal(false)
      done()
    },
  },

  {
    name: 'Criar questão de bloco para tornar pública',
    verb: 'post',
    as: 'docente',
    rota: '/api/questoes',
    sample: questaoBloco,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.questaoDoDocente = res.body.id
      done()
    },
  },

  {
    name: 'Tornar questão de bloco pública',
    verb: 'patch',
    as: 'docente',
    rota: '/api/questoes/:questaoDoDocente',
    sample: { ...questaoBloco, publico: true },
    status: 200,
    func: (err, res, done) => {
      res.body.publico.should.equal(true)
      done()
    },
  },

  {
    name: 'Professor copia questão pública de bloco',
    verb: 'get',
    as: 'professor',
    rota: '/api/questoes/:questaoDoDocente/copiar',
    status: 200,
    func: (err, res, done) => {
      res.body.data.publico.should.equal(false)
      res.body.data.bloco.questoes.forEach(questao => {
        questao.tagIds.length.should.equal(1)
      })
      done()
    },
  },
]
