const { testData } = require('test-api/testData')

const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolhaConcurso')
const questaoBloco = require('test-api/samples/questao/questaoBlocoConcurso')

const { ids } = testData

exports.questaoDoConcurso200 = [
  {
    name: 'Adicionar questão de múltipla escolha no concurso do docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: questaoMultiplaEscolha,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) {
        ids.questaoDoConcursoDoDocente = res.body.id
        res.body.tagIds.forEach((tag, index) => {
          const tagVirtual = questaoMultiplaEscolha.tagsVirtuais[index]
          if (tagVirtual.isNew) tag.should.not.equal(tagVirtual.id)
          else tag.should.equal(tagVirtual.id)
        })
      }
      done()
    },
  },
  {
    name: 'Adicionar bloco no concurso do docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: questaoBloco,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) {
        ids.blocoDoConcursoDoDocente = res.body.id
        res.body.bloco.questoes.forEach((questao, questaoIndex) => {
          questao.tagIds.forEach((tag, index) => {
            const tagVirtual = questaoBloco.bloco.questoes[questaoIndex].tagsVirtuais[index]
            if (tagVirtual.isNew) tag.should.not.equal(tagVirtual.id)
            else tag.should.equal(tagVirtual.id)
          })
        })
      }
      done()
    },
  },
  {
    name: 'Editar bloco no concurso do docente',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/:blocoDoConcursoDoDocente',
    sample: { enunciado: 'alteracao' },
    status: 200,
    func: (err, res, done) => {
      res.body.enunciado.should.equal('alteracao')
      done()
    },
  },
  {
    name: 'Editar bloco no concurso',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/:blocoDoConcursoDoDocente',
    sample: { bloco: questaoBloco.bloco },
    status: 200,
  },
  {
    name: 'Editar questão no concurso do docente',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/:questaoDoConcursoDoDocente',
    sample: { enunciado: 'alteracao' },
    status: 200,
    func: (err, res, done) => {
      res.body.enunciado.should.equal('alteracao')
      done()
    },
  },
  {
    name: 'Busca questoes do concurso do docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    status: 200,
  },
]
