const { testData } = require('test-api/testData')

const concurso = require('test-api/samples/sampleConcurso')
const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolhaConcurso')

const getCopy = object => () => JSON.parse(JSON.stringify(object))

const getQuestaoMultiplaEscolha = getCopy(questaoMultiplaEscolha)

const { ids } = testData

exports.concurso200 = [
  {
    name: 'Criar concurso como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos',
    sample: concurso,
    status: 200,
    func: (err, res, done) => {
      res.body.usuarioId.should.equal(ids['docente'])
      if (res.status === 200) {
        ids.concursoDoDocente = res.body.id
      }
      done()
    },
  },
  {
    name: 'Busca concurso do docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente',
    status: 200,
  },
  {
    name: 'Criar concurso para exclusão',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos',
    sample: concurso,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.concursoParaExcluir = res.body.id
      done()
    },
  },
  {
    name: 'Excluir concurso',
    verb: 'delete',
    as: 'docente',
    rota: '/api/concursos/:concursoParaExcluir',
    status: 200,
  },
  {
    name: 'Altera concurso como docente',
    verb: 'patch',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente',
    sample: { titulo: 'novoTitulo' },
    status: 200,
    func: (err, res, done) => {
      const dados = res.body
      dados.titulo.should.equal('novoTitulo')
      done()
    },
  },
  {
    name: 'Criar questão no concurso sem enunciado',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: () => {
      const dados = getQuestaoMultiplaEscolha()
      dados.enunciado = ''
      return dados
    },
    status: 200,
  },
]
