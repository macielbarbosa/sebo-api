const required = true

export const enumOperacoes = Object.freeze({
  rascunho: 'rascunho',
  oficial: 'oficial',
  cadernoDeConcurso: 'cadernoDeConcurso',
  gabaritosConcurso: 'gabaritosConcurso',
  questaoDeRecurso: 'questaoDeRecurso',
  capaCaderno: 'capaCaderno',
  imagemQuestaoConcurso: 'imagemQuestaoConcurso',
})

export const contratoOperacao = {
  type: 'object',
  contrato: {
    id: { type: 'string', required },
    tipo: { type: 'enum', enum: enumOperacoes, required },
    informacoes: {
      type: 'object',
      contrato: {
        impressaoDoConcursoId: { type: 'string' },
        impressaoGabaritosId: { type: 'string' },
        concursoId: { type: 'string' },
        versao: { type: 'string' },
        extensao: { type: 'string' },
        temMarcaDagua: { type: 'boolean' },
        cadernoId: { type: 'string' },
        impressaoId: { type: 'string' },
        template: { type: 'string' },
        tipoDados: { type: 'string' },
        versaoCaderno: {
          type: 'object',
          contrato: { id: { type: 'string', required }, apelido: { type: 'string', required } },
        },
      },
    },
  },
  required,
}
