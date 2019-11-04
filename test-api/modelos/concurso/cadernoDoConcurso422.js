const caderno = require('test-api/samples/sampleCadernoNoConcurso')

const getCadernoNoConcurso = () => JSON.parse(JSON.stringify(caderno))

exports.cadernoDoConcurso422 = [
  {
    name: 'Falha ao tentar criar caderno no concurso com template',
    verb: 'post',
    as: 'docente',
    rota:
      '/api/concursos/:concursoDoDocente/cargos-list/:concursoDoDocenteCargo/etapas/:concursoDoDocenteEtapa/cadernos',
    sample: () => ({ ...caderno, template: 'algumacoisa' }),
    status: 422,
  },
  {
    name: 'Falha ao tentar criar caderno no concurso sem título',
    verb: 'post',
    as: 'docente',
    rota:
      '/api/concursos/:concursoDoDocente/cargos-list/:concursoDoDocenteCargo/etapas/:concursoDoDocenteEtapa/cadernos',
    sample: () => {
      const dados = getCadernoNoConcurso()
      dados.titulo = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar caderno no concurso sem descrição',
    verb: 'post',
    as: 'docente',
    rota:
      '/api/concursos/:concursoDoDocente/cargos-list/:concursoDoDocenteCargo/etapas/:concursoDoDocenteEtapa/cadernos',
    sample: () => {
      const dados = getCadernoNoConcurso()
      dados.descricao = ''
      return dados
    },
    status: 422,
  },
  {
    name: 'Falha ao tentar criar caderno no concurso com duração inválida',
    verb: 'post',
    as: 'docente',
    rota:
      '/api/concursos/:concursoDoDocente/cargos-list/:concursoDoDocenteCargo/etapas/:concursoDoDocenteEtapa/cadernos',
    sample: () => {
      const dados = getCadernoNoConcurso()
      dados.duracao = { a: 1, b: 2 }
      return dados
    },
    status: 422,
  },
]
