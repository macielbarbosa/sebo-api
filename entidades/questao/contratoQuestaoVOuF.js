import { getQuestaoAtributosComuns } from './questaoAtributosComuns'

export const getContratoQuestaoVOuF = () => ({
  ...getQuestaoAtributosComuns(),
  vouf: {
    required: true,
    type: 'object',
    contrato: {
      afirmacoes: {
        required: true,
        type: 'array',
        typeElemento: 'object',
        contratoElemento: {
          texto: {
            required: false,
            type: 'string',
          },
          letra: {
            required: true,
            type: 'string',
          },
        },
      },
    },
  },
})

export const contratoQuestaoVOuF = Object.freeze(getContratoQuestaoVOuF())
