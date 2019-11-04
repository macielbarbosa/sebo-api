const { testData } = require('test-api/testData')
const prova = require('test-api/samples/prova/sampleProvaConcurso')

const getProvaNoConcurso = () => {
  const provaNoConcurso = JSON.parse(JSON.stringify(prova))
  return provaNoConcurso
}

const { ids } = testData

const getProvaComIdsValidos = () => {
  const prova = getProvaNoConcurso()
  prova.grupos[0].questoes[0].questaoId = ids.questaoDoConcursoDoDocente
  prova.grupos[0].questoes[1].questaoId = ids.blocoDoConcursoDoDocente
  return prova
}

const getProvaEdit = () => {
  const { grupos } = getProvaComIdsValidos()
  grupos[0].questoes.pop()
  return { titulo: 'novoTitulo', grupos }
}

exports.provaDoConcurso200 = [
  {
    name: 'Criar prova no concurso como docente',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list',
    sample: getProvaComIdsValidos,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) {
        ids.provaDoConcursoDoDocente = res.body.id
        res.body.tagIds.forEach((tag, index) => {
          const tagVirtual = prova.tagsVirtuais[index]
          if (tagVirtual.isNew) tag.should.not.equal(tagVirtual.id)
          else tag.should.equal(tagVirtual.id)
        })
      }
      done()
    },
  },
  {
    name: 'Ver prova criada',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list/:provaDoConcursoDoDocente',
    status: 200,
    func: (err, res, done) => {
      const prova = res.body
      Array.isArray(prova.questoes).should.equal(true)
      const questoesIsArray = Array.isArray(prova.questaoIds)
      questoesIsArray.should.equal(true)
      if (questoesIsArray) {
        prova.questaoIds.forEach((questaoId, indexQuestao) => {
          questaoId.should.equal(prova.questoes[indexQuestao].id)
        })
      }
      done()
    },
  },
  {
    name: 'Ver lista de provas no concurso do docente',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list',
    status: 200,
    func: (err, res, done) => {
      const listaProvas = res.body
      listaProvas.forEach((prova, indexProva) => {
        Array.isArray(prova.questoes).should.equal(true)
        const questoesIsArray = Array.isArray(prova.questaoIds)
        questoesIsArray.should.equal(true)
        if (questoesIsArray) {
          prova.questaoIds.forEach((questaoId, indexQuestao) => {
            questaoId.should.equal(listaProvas[indexProva].questoes[indexQuestao].id)
          })
        }
      })
      done()
    },
  },
  {
    name: 'Criar prova no concurso para exclusão',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list',
    sample: getProvaComIdsValidos,
    status: 200,
    func: (err, res, done) => {
      if (res.status === 200) ids.provaDoConcursoParaExcluir = res.body.id
      done()
    },
  },
  {
    name: 'Buscar provas do concurso',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list',
    status: 200,
  },
  {
    name: 'Excluir prova do concurso',
    verb: 'delete',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list/:provaDoConcursoParaExcluir',
    status: 204,
  },
  {
    name: 'Ver que prova de concurso excluída não existe',
    verb: 'get',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list/:provaDoConcursoParaExcluir',
    status: 404,
  },
  {
    name: 'Altera prova no concurso como docente',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/provas-list/:provaDoConcursoDoDocente',
    sample: getProvaEdit,
    status: 200,
    func: (err, res, done) => {
      const dados = res.body
      const { grupos } = getProvaEdit()
      const questaoIds = []
      grupos.forEach(grupo => grupo.questoes.forEach(questao => questaoIds.push(questao.questaoId)))
      dados.questaoIds.forEach((id, index) => id.should.equal(questaoIds[index]))
      dados.titulo.should.equal('novoTitulo')
      done()
    },
  },
]
