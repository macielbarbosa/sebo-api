import { validarDificuldade } from '../validarDificuldade'
import { contratoQuestaoVOuF } from '../contratoQuestaoVOuF'

export const contratoPreviewQuestaoVOuF = {
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
  vouf: {
    required: true,
    type: 'object',
    contrato: contratoQuestaoVOuF.vouf.contrato,
  },
}
