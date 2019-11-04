const usuario = require('test-api/samples/sampleUsuario')

const wrongPass = require('test-api/samples/sampleNewPasswordWrong')
const updatePassword = require('test-api/samples/sampleErrorUpdatePassword')
const updatePassword2 = require('test-api/samples/sampleError2UpdatePassword')

const hashDocente = {
  hashSenha: '2222',
  dataCricaoHashSenha: new Date(),
}

wrongPass.hashSenha = hashDocente.hashSenha
wrongPass.password = '12345678'
wrongPass.passwordConfirmation = '12345679'

const getUsuario = () => JSON.parse(JSON.stringify(usuario))

exports.usuario422 = [
  {
    name: 'Criar hash no docente para falhar senha',
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
    name: 'Falha ao tentar mudar um password diferente de sua confirmação',
    verb: 'post',
    as: 'docente',
    rota: '/api/usuarios/update-forgotten-password/',
    sample: wrongPass,
    status: 422,
  },
  {
    name: 'Falha ao tentar criar usuario com senha pequena',
    verb: 'post',
    as: 'admin',
    rota: '/api/usuarios',
    sample: () => {
      const dados = getUsuario()
      dados.password = '1234567'
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar usuario sem email',
    verb: 'post',
    as: 'admin',
    rota: '/api/usuarios',
    sample: () => {
      const dados = getUsuario()
      dados.email = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar usuario com email repetido',
    verb: 'post',
    as: 'admin',
    rota: '/api/usuarios',
    sample: () => {
      const dados = getUsuario()
      dados.email = 'docente@ufrn.br'
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao alterar senha: senha atual não coincide',
    verb: 'post',
    as: 'docente',
    rota: '/api/usuarios/:docente/update-password',
    sample: updatePassword,
    status: 422,
  },
  {
    name: 'Falha ao alterar senha: novas senhas não coincidem',
    verb: 'post',
    as: 'docente',
    rota: '/api/usuarios/:docente/update-password',
    sample: updatePassword2,
    status: 422,
  },
]
