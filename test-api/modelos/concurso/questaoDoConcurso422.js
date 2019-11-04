const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolhaConcurso')
const questaoBloco = require('test-api/samples/questao/questaoBlocoConcurso')

const getCopy = object => () => JSON.parse(JSON.stringify(object))

const getQuestaoMultiplaEscolha = getCopy(questaoMultiplaEscolha)
const getQuestaoBloco = getCopy(questaoBloco)

exports.questaoDoConcurso422 = [
  {
    name: 'Falha ao tentar criar bloco no concurso com questão sem tagsVirtuais',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: () => {
      const dados = getQuestaoBloco()
      delete dados.bloco.questoes[0].tagsVirtuais
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar bloco no concurso com questão com "tags"',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: () => {
      const dados = getQuestaoBloco()
      dados.bloco.questoes[0].tags = []
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar questão no concurso sem tipo',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: () => {
      const dados = getQuestaoMultiplaEscolha()
      dados.tipo = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar questão no concurso sem tagsVirtuais',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: () => {
      const dados = getQuestaoMultiplaEscolha()
      dados.tagsVirtuais = null
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar questão no concurso com propriedade chamada "tags"',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: () => {
      const dados = getQuestaoMultiplaEscolha()
      dados.tags = []
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar questão no concurso com propriedade chamada "tagIds"',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/',
    sample: () => {
      const dados = getQuestaoMultiplaEscolha()
      dados.tagIds = []
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar editar tipo da questão no concurso',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/:questaoDoConcursoDoDocente',
    sample: () => {
      return { tipo: 'discursiva' }
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar editar questão com dois campos específicos',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/:questaoDoConcursoDoDocente',
    sample: { multiplaEscolha: questaoMultiplaEscolha.multiplaEscolha, bloco: questaoBloco.bloco },
    status: 422,
    func: (err, res, done) => {
      done()
    },
  },
  {
    name: 'Falha ao tentar editar questão no concurso com propriedade chamada "tags"',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/:questaoDoConcursoDoDocente',
    sample: { tags: [] },
    status: 422,
  },
  {
    name: 'Falha ao tentar editar questão no concurso com propriedade chamada "tagIds"',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/:questaoDoConcursoDoDocente',
    sample: { tagIds: [] },
    status: 422,
  },
  {
    name: 'Falha ao tentar editar bloco no concurso com questão com "tags"',
    verb: 'put',
    as: 'docente',
    rota: '/api/concursos/:concursoDoDocente/questoes-list/:blocoDoConcursoDoDocente',
    sample: () => {
      const { bloco } = getQuestaoBloco()
      bloco.questoes[0].tags = []
      return { bloco }
    },
    status: 422,
  },
]
