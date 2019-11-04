import { contratoQuestaoPreview } from './contratoQuestaoPreview'

export const contratoPreviewQuestaoBloco = {
  id: {},
  enunciado: {
    type: 'string',
  },
  tipo: {
    required: true,
    type: 'string',
  },
  bloco: {
    required: true,
    type: 'object',
    contrato: {
      fraseInicial: {
        type: 'string',
      },
      questoes: {
        required: true,
        type: 'array',
        typeElemento: 'object',
        contratoElemento: contratoQuestaoPreview,
      },
    },
  },
  status: {},
}
