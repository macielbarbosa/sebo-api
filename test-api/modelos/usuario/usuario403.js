const newPassword = require('test-api/samples/sampleNewPasswordFalha')

const hashDocente = {
  hashSenha: '1111',
  dataCricaoHashSenha: new Date('01/01/2019'),
}

newPassword.hashSenha = '1111'

exports.usuario403 = [
  {
    name: 'Coloca data de hash atrasada no docente',
    verb: 'patch',
    as: 'admin',
    rota: '/api/usuarios/:docente',
    sample: hashDocente,
    status: 200,
    func: (err, res, done) => {
      done()
    },
  },
  {
    name: 'Falha ao tentar mudar senha com hash expirado',
    verb: 'post',
    as: 'docente',
    sample: newPassword,
    rota: '/api/usuarios/update-forgotten-password/',
    status: 403,
  },
]
