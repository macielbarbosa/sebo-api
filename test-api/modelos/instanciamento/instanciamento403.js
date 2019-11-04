const { testData } = require('test-api/testData')
const { ids } = testData

exports.instanciamento403 = [
  {
    name: 'Falha ao tentar acessar a vista de prova como discente quando a instância ainda não está concluída.',
    verb: 'get',
    as: 'discente',
    rota: `/api/instanciamentos/:instanciaCriada/vista-de-prova`,
    status: 403,
    func: (err, res, done) => {
      res.body.usuarioId.should.equal(ids['docente'])
      if (res.status === 200) {
        ids.concursoDoDocente = res.body.id
      }
      done()
    },
  },
]
