const turma01 = require('test-api/samples/turma/turma01')

exports.turma401 = [
  {
    name: 'Falha ao tentar criar turma com perfil discente',
    verb: 'post',
    as: 'discente',
    rota: '/api/turmas',
    sample: turma01,
    status: 401,
  },
  {
    name: 'Erro ao listar turmas recentes com perfil discente',
    verb: 'get',
    as: 'discente',
    rota: '/api/turmas/turmas-recentes',
    status: 401,
  },
]
