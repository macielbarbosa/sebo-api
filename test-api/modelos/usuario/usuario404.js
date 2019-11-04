const newPassword = require('test-api/samples/sampleNewPassword')

exports.usuario404 = [
  {
    name: 'Falha ao tentar mudar senha sem hash enviado',
    verb: 'post',
    as: 'docente',
    sample: newPassword,
    rota: '/api/usuarios/update-forgotten-password/',
    status: 404,
  },
]
