const concurso = require('test-api/samples/sampleConcurso')
const questaoMultiplaEscolha = require('test-api/samples/questao/questaoMultiplaEscolha')

const getCopy = object => () => JSON.parse(JSON.stringify(object))

const getConcurso = getCopy(concurso)
const getQuestaoMultiplaEscolha = getCopy(questaoMultiplaEscolha)

exports.concurso422 = [
  {
    name: 'Falha ao tentar criar concurso sem título',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos',
    sample: () => {
      const dados = getConcurso()
      dados.titulo = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar concurso com cargo sem título',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos',
    sample: () => {
      const dados = getConcurso()
      dados.cargos[0].titulo = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar concurso com etapa sem título',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos',
    sample: () => {
      const dados = getConcurso()
      dados.cargos[0].etapas[0].titulo = ''
      return dados
    },
    status: 422,
    func: (err, res, done) => {
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
    name: 'Falha ao tentar criar concurso sem campo "opcoes"',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos',
    sample: () => {
      const dados = getConcurso()
      dados.opcoes = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar concurso cujo campo opcoes nao contem "template"',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos',
    sample: () => {
      const dados = getConcurso()
      dados.opcoes.template = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar concurso cujo campo "template" não tem conteúdo compatível com o esperado',
    verb: 'post',
    as: 'docente',
    rota: '/api/concursos',
    sample: () => {
      const dados = getConcurso()
      dados.opcoes.template = 'grifinoria'
      return dados
    },
    status: 422,
  },
]
