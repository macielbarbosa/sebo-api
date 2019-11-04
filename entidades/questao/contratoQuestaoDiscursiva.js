import { getQuestaoAtributosComuns } from './questaoAtributosComuns'

export const getContratoQuestaoDiscursiva = () => ({
  ...getQuestaoAtributosComuns(),
  discursiva: {
    required: true,
    type: 'object',
    contrato: {
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

export const contratoQuestaoDiscursiva = Object.freeze(getContratoQuestaoDiscursiva())
