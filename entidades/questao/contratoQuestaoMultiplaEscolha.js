import { getQuestaoAtributosComuns } from './questaoAtributosComuns'

export const getContratoQuestaoMultiplaEscolha = () => ({
  ...getQuestaoAtributosComuns(),
  multiplaEscolha: {
    required: true,
    type: 'object',
    contrato: {
      alternativasPorLinha: {
        required: true,
        type: 'number',
      },
      respostaCerta: {
        required: true,
        type: 'string',
      },
      alternativas: {
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

export const contratoQuestaoMultiplaEscolha = Object.freeze(getContratoQuestaoMultiplaEscolha())
