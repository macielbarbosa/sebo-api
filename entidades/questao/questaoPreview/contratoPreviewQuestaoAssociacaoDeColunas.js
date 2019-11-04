import { validarDificuldade } from '../validarDificuldade'
import { contratoQuestaoAssociacaoDeColunas } from '../contratoQuestaoAssociacaoDeColunas'

export const contratoPreviewQuestaoAssociacaoDeColunas = {
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
  associacaoDeColunas: {
    required: true,
    type: 'object',
    contrato: contratoQuestaoAssociacaoDeColunas.associacaoDeColunas.contrato,
  },
}
