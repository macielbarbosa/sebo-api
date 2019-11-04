import { getQuestaoAtributosComuns } from './questaoAtributosComuns'

export const getContratoQuestaoRedacao = () => ({
  ...getQuestaoAtributosComuns(),
  redacao: {
    required: true,
    type: 'object',
    contrato: {
      tema: {
        required: true,
        type: 'string',
      },
      instrucoes: {
        required: true,
        type: 'string',
      },
      numeroDeLinhas: {
        required: true,
        type: 'number',
      },
      expectativaDeResposta: {
        required: true,
        type: 'string',
      },
    },
  },
})

export const contratoQuestaoRedacao = Object.freeze(getContratoQuestaoRedacao())
