const usuario = require('test-api/samples/prova/sampleProva')
const updatePassword = require('test-api/samples/sampleUpdatePassword')

exports.usuario401 = [
  {
    name: 'Falha ao tentar alterar usuario como admin',
    verb: 'patch',
    as: 'admin',
    rota: '/api/usuarios/:usuario',
    sample: usuario,
    status: 422,
  },
  {
    name: 'Falha ao tentar criar usuario como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/usuarios/',
    sample: usuario,
    status: 401,
  },
  {
    name: 'Falha ao tentar criar usuario como discente',
    verb: 'post',
    as: 'discente',
    rota: '/api/usuarios/',
    sample: usuario,
    status: 401,
  },
  {
    name: 'Falha ao tentar criar usuario sem estar logado',
    verb: 'post',
    rota: '/api/usuarios/',
    sample: usuario,
    status: 401,
  },
  {
    name: 'Falha a um discente tentar o get usuário do tipo docente',
    verb: 'get',
    as: 'discente',
    filter: 'value=ufrn',
    rota: '/api/usuarios/usuarios-docente/',
    status: 401,
  },
  {
    name: 'Falha a um discente tentar o get usuário do tipo discente',
    verb: 'get',
    as: 'discente',
    rota: '/api/usuarios/usuarios-discentes/',
    status: 401,
  },
  {
    name: 'Falha ao alterar a senha de outro usuário',
    verb: 'post',
    as: 'docente',
    rota: '/api/usuarios/:discente/update-password',
    sample: updatePassword,
    status: 401,
  },
]
