const required = true

export const enumOperacoes = Object.freeze({
  geracaoDePreview: 'geracaoDePreview',
  instanciamento: 'instanciamento',
})

const opcoesInstanciamento = {
  type: 'object',
  contrato: { embaralharAlternativas: { type: 'boolean' } },
}

const contratosInformacoes = {
  [enumOperacoes.geracaoDePreview]: {
    id: { type: 'string', required },
    tipo: { type: 'literal', literal: enumOperacoes.geracaoDePreview, required },
    informacoes: {
      type: 'object',
      contrato: {
        impressaoId: { type: 'string', required },
        extensao: { type: 'string', required },
        tipoDados: { type: 'string' },
        opcoesInstanciamento,
      },
      required,
    },
  },
  [enumOperacoes.instanciamento]: {
    id: { type: 'string', required },
    tipo: { type: 'literal', literal: enumOperacoes.instanciamento, required },
    informacoes: {
      type: 'object',
      contrato: {
        versao: { type: 'string' },
        concursoId: { type: 'string' },
        cadernoId: { type: 'string' },
        impressaoId: { type: 'string' },
        template: { type: 'string' },
        opcoesInstanciamento,
        versaoCaderno: {
          type: 'object',
          contrato: { id: { type: 'string', required }, apelido: { type: 'string', required } },
        },
      },
    },
  },
}

export const contratoOperacao = Object.freeze({
  type: 'object',
  required,
  contrato: {
    type: 'polymorphic',
    polymorphic: {
      key: 'tipo',
      contratos: contratosInformacoes,
    },
  },
})
