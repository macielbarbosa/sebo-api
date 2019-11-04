const caderno = require('test-api/samples/sampleCaderno')

const getCaderno = () => JSON.parse(JSON.stringify(caderno))

exports.caderno422 = [
  {
    name: 'Falha ao tentar criar caderno com template inválido',
    verb: 'post',
    as: 'docente',
    rota: '/api/cadernos',
    sample: () => {
      const dados = getCaderno()
      dados.template = 'invalido'
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar caderno sem título',
    verb: 'post',
    as: 'docente',
    rota: '/api/cadernos',
    sample: () => {
      const dados = getCaderno()
      dados.titulo = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar caderno sem descrição',
    verb: 'post',
    as: 'docente',
    rota: '/api/cadernos',
    sample: () => {
      const dados = getCaderno()
      dados.descricao = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar caderno com duração inválida',
    verb: 'post',
    as: 'docente',
    rota: '/api/cadernos',
    sample: () => {
      const dados = getCaderno()
      dados.duracao = { a: 1, b: 2 }
      return dados
    },
    status: 422,
  },
]
