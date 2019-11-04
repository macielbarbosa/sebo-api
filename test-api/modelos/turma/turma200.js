const turma01 = require('test-api/samples/turma/turma01')
const turma02 = require('test-api/samples/turma/turma02')
const { testData } = require('test-api/testData')
const { ids } = testData

exports.turma200 = [
  {
    name: 'Criar turma com perfil docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/turmas',
    sample: turma01,
    status: 200,
  },
  {
    name: 'Listar turmas com perfil docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/:docente/turmas',
    status: 200,
  },
  {
    name: 'Listar turmas com perfil discente',
    verb: 'get',
    as: 'discente',
    rota: '/api/usuarios/:discente/turmas',
    func: (err, res, done) => {
      if (!err) res.body.length.should.equal(0)
      done()
    },
    status: 200,
  },
  {
    name: 'Criar segunda turma com perfil docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/turmas',
    sample: turma02,
    status: 200,
  },
  {
    name: 'Listar turmas recentes com perfil docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/turmas/turmas-recentes',
    func: (err, res, done) => {
      if (!err) res.body.map(turma => turma.usuarioId.should.equal(ids.docente))
      done()
    },
    status: 200,
  },
]
