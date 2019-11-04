const { testData } = require('test-api/testData')

const caderno = require('test-api/samples/sampleCaderno')
// const chamadaPreviewCaderno = require('test-api/samples/sampleChamadaPreviewCaderno')

const { ids } = testData

exports.caderno200 = [
  {
    name: 'Criar caderno como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/cadernos',
    sample: caderno,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.cadernoDoDocente = res.body.id
      done()
    },
  },
  {
    name: 'Criar caderno para exclusão',
    verb: 'post',
    as: 'docente',
    rota: '/api/cadernos',
    sample: caderno,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.cadernoParaExcluir = res.body.id
      done()
    },
  },
  {
    name: 'Excluir caderno',
    verb: 'delete',
    as: 'docente',
    rota: '/api/cadernos/:cadernoParaExcluir',
    status: 200,
  },
  {
    name: 'Altera caderno como docente',
    verb: 'patch',
    as: 'docente',
    rota: '/api/cadernos/:cadernoDoDocente',
    sample: { titulo: 'novoTitulo' },
    status: 200,
    func: (err, res, done) => {
      const dados = res.body
      dados.titulo.should.equal('novoTitulo')
      done()
    },
  },
  // {
  //   name: 'Gerar preview de caderno como docente',
  //   verb: 'post',
  //   as: 'docente',
  //   rota: '/api/cadernos/preview',
  //   sample: chamadaPreviewCaderno,
  //   status: 200,
  //   func: (err, res, done) => {
  //     const dados = res.body
  //     dados.status.should.equal('PROCESSANDO')
  //     const tipoImpressaoId = typeof dados.impressaoId
  //     tipoImpressaoId.should.equal('string')
  //     done()
  //   },
  // },
]
