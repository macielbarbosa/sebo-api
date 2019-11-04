import { validarDificuldade } from '../validarDificuldade'
import { contratoQuestaoMultiplaEscolha } from '../contratoQuestaoMultiplaEscolha'

export const contratoPreviewQuestaoMultiplaEscolha = {
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
  multiplaEscolha: {
    required: true,
    type: 'object',
    contrato: contratoQuestaoMultiplaEscolha.multiplaEscolha.contrato,
  },
}
