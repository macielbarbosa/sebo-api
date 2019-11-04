const { testData } = require('test-api/testData')

const usuario = require('test-api/samples/sampleUsuario')
const newPassword = require('test-api/samples/sampleNewPassword')
const aluno = require('test-api/samples/aluno/aluno')
const updatePassword = require('test-api/samples/sampleUpdatePassword')

const soEmail = require('test-api/samples/sampleSoEmail')

const { tokens, ids } = testData

exports.usuario200 = [
  {
    name: 'Criar usuario como admin',
    verb: 'post',
    as: 'admin',
    rota: '/api/usuarios',
    sample: usuario,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) {
        ids.usuario = res.body.id
        newPassword.email = res.body.email
        newPassword.username = res.body.username
      }
      done()
    },
  },
  {
    name: 'Busca usuarios como admin',
    verb: 'get',
    as: 'admin',
    rota: '/api/usuarios/',
    status: 200,
  },
  {
    name: 'Criar hash para envio de email',
    verb: 'post',
    sample: newPassword,
    rota: '/api/usuarios/forgot-password/',
    status: 204,
  },
  {
    name: 'Get usuário do tipo docente que possui email da UFRN',
    verb: 'get',
    as: 'docente',
    filter: 'value=ufrn',
    rota: '/api/usuarios/usuarios-docente/',
    status: 200,
    func: (err, res, done) => {
      if (res.body.usuarios.length > 0) {
        res.body.usuarios[0].username.should.equal('docente')
        res.body.usuarios[0].email.should.equal('docente@ufrn.br')
      }
      done()
    },
  },
  {
    name: 'Get usuário e ainda testa se recebeu o hash da senha do teste anterior',
    verb: 'get',
    as: 'admin',
    rota: `/api/usuarios/:usuario`,
    status: 200,
    func: (err, res, done) => {
      if (res.body) {
        res.body.username.should.equal(newPassword.username)
        res.body.email.should.equal(newPassword.email)
        res.body.hashSenha.should.not.equal(null)
        newPassword.hashSenha = res.body.hashSenha
        res.body.dataCricaoHashSenha.should.not.equal(null)
      }
      done()
    },
  },
  {
    name: 'Altera senha de acordo com o hash enviado',
    verb: 'post',
    as: 'docente',
    sample: newPassword,
    rota: '/api/usuarios/update-forgotten-password/',
    status: 204,
  },
  {
    name: 'Get usuário do tipo discente',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/usuarios-discentes/',
    status: 200,
    func: (err, res, done) => {
      if (res.body.usuarios.length > 0) {
        res.body.usuarios[0].username.should.equal('discente')
        res.body.usuarios[0].email.should.equal('discente@ufrn.br')
      }
      done()
    },
  },
  {
    name: 'Get usuário do tipo discente por Email',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/usuarios-discentes-by-email',
    sample: soEmail,
    status: 200,
    func: (err, res, done) => {
      if (res.body.length > 0) {
        res.body[0].username.should.equal('discente')
        res.body[0].email.should.equal('discente@ufrn.br')
      }
      done()
    },
  },
  {
    name: 'Get estatísticas acadêmicas',
    verb: 'get',
    as: 'gestor',
    rota: '/api/usuarios/estatisticas-academicas/',
    status: 200,
    func: (err, res, done) => {
      res.body.turmas.should.equal(1)
      res.body.docentes.should.equal(3)
      res.body.discentes.should.equal(3)
      res.body.instanciasAplicadas.should.equal(2)
      done()
    },
  },
  {
    name: 'Get estatísticas de questões',
    verb: 'get',
    as: 'gestor',
    rota: '/api/usuarios/estatisticas-questoes/',
    status: 200,
    func: (err, res, done) => {
      res.body.totalDeQuestoes.should.equal(4)
      res.body.multiplaEscolha.should.equal(2)
      res.body.vouf.should.equal(0)
      res.body.discursiva.should.equal(0)
      res.body.associacaoDeColunas.should.equal(0)
      res.body.bloco.should.equal(2)
      res.body.redacao.should.equal(0)
      done()
    },
  },
  {
    name: 'Get estatísticas de questões do professor',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/:docente/estatisticas-questoes/',
    status: 200,
    func: (err, res, done) => {
      res.body.totalDeQuestoes.should.equal(3)
      res.body.multiplaEscolha.should.equal(1)
      res.body.vouf.should.equal(0)
      res.body.discursiva.should.equal(0)
      res.body.associacaoDeColunas.should.equal(0)
      res.body.bloco.should.equal(2)
      res.body.redacao.should.equal(0)
      done()
    },
  },
  {
    name: 'Get estatísticas de provas aplicadas',
    verb: 'get',
    as: 'gestor',
    rota: '/api/usuarios/estatisticas-provas-aplicadas/',
    status: 200,
    func: (err, res, done) => {
      res.body.totalDeProvas.should.equal(1)
      done()
    },
  },
  {
    name: 'Get estatisticas de provas com vista habilitada ou em aplicação',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/:docente/estatisticas-provas/',
    status: 200,
    func: (err, res, done) => {
      res.body.provasEmAplicacao.should.equal(1)
      res.body.provasComVistaHabilitadas.should.equal(2)
      done()
    },
  },
  {
    name: 'Get estatisticas de instancias para corrigir e instancias concluidas ',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/:docente/estatisticas-instancias/',
    status: 200,
    func: (err, res, done) => {
      res.body.totalDeInstanciasConcluidas.should.equal(3)
      res.body.totalDeInstanciasParaCorrigir.should.equal(2)
      res.body.instanciasConcluidas.length.should.equal(3)
      res.body.instanciasConcluidas[0].prova.should.not.equal(undefined)
      res.body.instanciasConcluidas[1].prova.should.not.equal(undefined)

      done()
    },
  },
  {
    name: 'Get estatisticas de instancias pelo discente ',
    verb: 'get',
    as: 'discente',
    rota: '/api/usuarios/:discente/estatisticas-provas-discente/',
    status: 200,
    func: (err, res, done) => {
      res.body.provasParaFazer.should.equal(1)
      res.body.provasJaRespondidas.should.equal(2)
      res.body.provasComVistaHabilitada.should.equal(1)
      res.body.ultimas10Provas.length.should.equal(1)
      done()
    },
  },
  {
    name: 'Criar aluno como admin',
    verb: 'post',
    as: 'admin',
    rota: '/api/usuarios/aluno',
    sample: aluno,
    status: 200,
  },
  {
    name: 'Testando verificação da existencia de alunos em lote',
    verb: 'get',
    as: 'docente',
    rota: '/api/usuarios/alunos-em-lote',
    status: 200,
    sample: { matriculaOuEmail: ['discente@ufrn.br', 9989695, 'discente', 'das951', '95951'] },
  },
  {
    name: 'Busca usuários por perfil discente',
    verb: 'get',
    as: 'admin',
    filter: 'filter=%7B%22whereParams%22%3A%7B%22roleId%22%3A3%7D%7D',
    rota: '/api/usuarios/usuarios-by-roles/',
    status: 200,
    func: (err, res, done) => {
      res.body.length.should.equal(4)
      res.body[0].username.should.equal('discente')
      res.body[0].email.should.equal('discente@ufrn.br')
      done()
    },
  },
  {
    name: 'Busca usuários por perfil docente e nome professor',
    verb: 'get',
    as: 'admin',
    filter: 'filter=%7B%22whereParams%22%3A%7B%22roleId%22%3A2%2C%22value%22%3A%22professor%22%7D%7D',
    rota: '/api/usuarios/usuarios-by-roles/',
    status: 200,
    func: (err, res, done) => {
      res.body.length.should.equal(1)
      res.body[0].username.should.equal('professor')
      res.body[0].email.should.equal('professor@gmail.com')
      done()
    },
  },
  {
    name: 'Contar usuários por perfil discente',
    verb: 'get',
    as: 'admin',
    filter: 'whereParams=%7B%22roleId%22%3A3%7D',
    rota: '/api/usuarios/usuarios-by-roles/count',
    status: 200,
    func: (err, res, done) => {
      res.body.count.should.equal(4)
      done()
    },
  },
  {
    name: 'Contar usuários por perfil docente e nome professor',
    verb: 'get',
    as: 'admin',
    filter: 'whereParams=%7B%22roleId%22%3A2%2C%22value%22%3A%22professor%22%7D',
    rota: '/api/usuarios/usuarios-by-roles/count',
    status: 200,
    func: (err, res, done) => {
      res.body.count.should.equal(1)
      done()
    },
  },
  {
    name: 'Alteração de senha com sucesso do usuario docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/usuarios/:docente/update-password',
    sample: updatePassword,
    status: 200,
  },
  {
    name: 'Login do usuario docente',
    verb: 'post',
    rota: '/api/usuarios/login/',
    sample: { email: 'docente@ufrn.br', password: '12345678' },
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) {
        const { id, userId } = res.body
        tokens['docente'] = id
        ids['docente'] = userId
      }
      done()
    },
  },
]
