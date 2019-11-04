import { contratoQuestaoDiscursiva } from '../contratoQuestaoDiscursiva'
import { validarDificuldade } from '../validarDificuldade'

export const contratoPreviewQuestaoDiscursiva = {
  id: {},
  enunciado: {
    required: true,
    type: 'string',
  },
  dificuldade: {
    type: 'number',
    validar: validarDificuldade,
  },
  tipo: {
    required: true,
    type: 'string',
  },
  status: {},
  elaborador: {},
  tagsVirtuais: {},
  anoEscolar: {},
  discursiva: {
    required: true,
    type: 'object',
    contrato: contratoQuestaoDiscursiva.discursiva.contrato,
  },
}
