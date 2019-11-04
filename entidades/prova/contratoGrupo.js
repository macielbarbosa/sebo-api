const required = true

const contratoQuestaoNoGrupo = {
  questaoId: { type: 'string', required },
  fixa: { type: 'boolean', required },
}

export const contratoGrupo = {
  id: {
    type: 'string',
  },
  nome: {
    type: 'string',
  },
  questoes: {
    required,
    type: 'array',
    typeElemento: 'object',
    contratoElemento: {
      ...contratoQuestaoNoGrupo,
      bloco: {
        type: 'array',
        typeElemento: 'object',
        contratoElemento: contratoQuestaoNoGrupo,
      },
    },
  },
}
