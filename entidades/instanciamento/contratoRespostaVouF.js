import { validarComEnum } from '../validarComEnum'
import { enumTipoQuestao } from '../enumTipoQuestao'

export const contratoRespostaVouF = {
  tipo: {
    type: 'string',
    required: true,
    validar: validarComEnum(enumTipoQuestao),
  },
  grupoIndex: {
    type: 'number',
    required: true,
  },
  questaoIndex: {
    type: 'number',
    required: true,
  },
  afirmacaoIndex: {
    type: 'number',
    required: true,
  },
  respostaCandidato: {
    type: 'string',
  },
}
