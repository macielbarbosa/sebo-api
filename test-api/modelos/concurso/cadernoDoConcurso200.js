const { testData } = require('test-api/testData')
const caderno = require('test-api/samples/sampleCadernoNoConcurso')
const { enumStatusCaderno } = require('entidades/caderno/cadernoNoConcurso/enumStatusCaderno')
const respostaInstanciamentoCadernoConcurso = require('test-api/samples/respostaInstanciamentoCadernoConcurso')

const listaCadernosInstanciados = Object.keys(respostaInstanciamentoCadernoConcurso).map(
  id => respostaInstanciamentoCadernoConcurso[id]
)

const { ids } = testData

const getCadernoNoConcurso = () => {
  const cadernoNoConcurso = JSON.parse(JSON.stringify(caderno))
  return cadernoNoConcurso
}

const ETAPA_INDEX = 0
const CARGO_INDEX = 0

exports.cadernoDoConcurso200 = [
  {
    name: 'Adicionar ids de cargo e etapa de concursoDoDocente',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente',
    status: 200,
    func: (err, res, done) => {
      const concursoDoDocente = res.body
      ;(typeof concursoDoDocente.cargos[CARGO_INDEX].id).should.equal('string')
      ids.concursoDoDocenteCargo = concursoDoDocente.cargos[CARGO_INDEX].id
      ;(typeof concursoDoDocente.cargos[CARGO_INDEX].etapas[ETAPA_INDEX].id).should.equal('string')
      ids.concursoDoDocenteEtapa = concursoDoDocente.cargos[CARGO_INDEX].etapas[ETAPA_INDEX].id
      done()
    },
  },
  {
    name: 'Criar caderno no concurso como docente',
    verb: 'post',
    as: 'docente',
    rota:
      '/api/concursos/:concursoDoDocente/cargos-list/:concursoDoDocenteCargo/etapas/:concursoDoDocenteEtapa/cadernos',
    sample: getCadernoNoConcurso,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) {
        ids.cadernoDoConcursoDoDocente = res.body.caderno.id
      }
      done()
    },
  },
  {
    name: 'Ver caderno criado agora',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/cadernos-list/:cadernoDoConcursoDoDocente',
    status: 200,
    func: (err, res, done) => {
      const caderno = res.body
      Array.isArray(caderno.provas).should.equal(true)
      const provasIsArray = Array.isArray(caderno.provasIds)
      provasIsArray.should.equal(true)
      if (provasIsArray) {
        caderno.provasIds.forEach((provaId, indexQuestao) => {
          provaId.should.equal(caderno.provas[indexQuestao].id)
        })
      }
      done()
    },
  },
  {
    name: 'Ver lista de cadernos no concurso do docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/cadernos-list',
    status: 200,
    func: (err, res, done) => {
      const listaCadernos = res.body
      listaCadernos.forEach((caderno, indexCaderno) => {
        Array.isArray(caderno.provas).should.equal(true)
        Array.isArray(caderno.provasIds).should.equal(true)
        if (caderno.provasIds) {
          caderno.provasIds.forEach((provaId, indexQuestao) => {
            provaId.should.equal(listaCadernos[indexCaderno].provas[indexQuestao].id)
          })
        }
      })
      done()
    },
  },
  {
    name: 'Criar caderno no concurso para exclusão',
    verb: 'post',
    as: 'docente',
    rota:
      '/api/concursos/:concursoDoDocente/cargos-list/:concursoDoDocenteCargo/etapas/:concursoDoDocenteEtapa/cadernos',
    sample: getCadernoNoConcurso,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.cadernoDoConcursoParaExcluir = res.body.caderno.id
      done()
    },
  },
  {
    name: 'Excluir caderno do concurso',
    verb: 'delete',
    as: 'docente',
    rota:
      '/api/concursos/:concursoDoDocente/cargos-list/:concursoDoDocenteCargo/etapas/:concursoDoDocenteEtapa/cadernos/:cadernoDoConcursoParaExcluir',
    status: 204,
  },
  {
    name: 'Ver que caderno excluído não existe na lista de cadernos do concurso',
    verb: 'patch',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/cadernos-list/:cadernoDoConcursoParaExcluir',
    status: 404,
  },
  {
    name: 'Ver que caderno de concurso excluído não existe na etapa',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente',
    status: 200,
    func: (err, res, done) => {
      const concurso = res.body
      const etapa = concurso.cargos[CARGO_INDEX].etapas[ETAPA_INDEX]
      console.log(JSON.stringify(etapa, null, 2))
      etapa.cadernos.includes(ids.cadernoDoConcursoParaExcluir).should.equal(false)
      done()
    },
  },
  {
    name: 'Altera caderno no concurso como docente',
    verb: 'patch',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/cadernos-list/:cadernoDoConcursoDoDocente',
    sample: { descricao: 'novaDescricao', status: enumStatusCaderno.edFinalizada },
    status: 200,
    func: (err, res, done) => {
      const dados = res.body.caderno
      dados.descricao.should.equal('novaDescricao')
      dados.status.should.equal(enumStatusCaderno.edFinalizada)
      done()
    },
  },
  {
    name: 'Buscar cadernos do concurso',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/cadernos-list',
    status: 200,
  },
  {
    name: 'Instancia caderno',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/:cadernoDoConcursoDoDocente/gerar-instanciamento',
    status: 200,
    func: (err, res, done) => {
      const dados = res.body
      ;(typeof dados.versao).should.equal('string')
      Boolean(dados.concurso).should.equal(true)
      ;(typeof dados.concurso).should.equal('object')
      Boolean(dados.caderno).should.equal(true)
      ;(typeof dados.caderno).should.equal('object')
      Array.isArray(dados.versoesCaderno).should.equal(true)
      dados.versoesCaderno.length.should.equal(dados.concurso.opcoes.numeroInstancias)
      done()
    },
  },
  // É preciso enviar todos as versões do caderno para o gabarito ser enviado para fila de impressão
  {
    name: '1 Enviar um instanciamento de caderno recebido para criar pdf.',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/receber-mensagem-instanciamento',
    sample: () => ({ payload: JSON.stringify(listaCadernosInstanciados[0]) }),
    status: 204,
  },
  {
    name: '2 Enviar um instanciamento de caderno recebido para criar pdf.',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/receber-mensagem-instanciamento',
    sample: () => ({ payload: JSON.stringify(listaCadernosInstanciados[1]) }),
    status: 204,
  },
  {
    name: '3 Enviar um instanciamento de caderno recebido para criar pdf.',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/receber-mensagem-instanciamento',
    sample: () => ({ payload: JSON.stringify(listaCadernosInstanciados[2]) }),
    status: 204,
  },
  {
    name: '4 Enviar um instanciamento de caderno recebido para criar pdf.',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/receber-mensagem-instanciamento',
    sample: () => ({ payload: JSON.stringify(listaCadernosInstanciados[3]) }),
    status: 204,
  },
  {
    name: '5 Enviar um instanciamento de caderno recebido para criar pdf.',
    verb: 'post',
    as: 'super',
    rota: '/api/instanciamentos/receber-mensagem-instanciamento',
    sample: () => ({ payload: JSON.stringify(listaCadernosInstanciados[4]) }),
    status: 204,
  },
]
