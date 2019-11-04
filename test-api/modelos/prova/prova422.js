const prova = require('test-api/samples/prova/sampleProva')

const getProva = () => JSON.parse(JSON.stringify(prova))

exports.prova422 = [
  {
    name: 'Falha ao tentar criar prova com questaoIds inválido',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: () => {
      const dados = getProva()
      dados.grupos[0].questoes[0].questaoId = 'invalido'
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar prova com template inválido',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: () => {
      const dados = getProva()
      dados.template = 'invalido'
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar prova sem título',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: () => {
      const dados = getProva()
      dados.titulo = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar prova sem descrição',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: () => {
      const dados = getProva()
      dados.descricao = ''
      return dados
    },
    status: 422,
  },

  {
    name: 'Falha ao tentar criar prova sem tipo',
    verb: 'post',
    as: 'docente',
    rota: '/api/provas',
    sample: () => {
      const dados = getProva()
      dados.tipoProva = ''
      return dados
    },
    status: 422,
  },
]
