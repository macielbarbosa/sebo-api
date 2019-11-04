import { validarComEnum } from '../validarComEnum'
import { enumTipoQuestao } from '../enumTipoQuestao'

export const contratoResposta = {
  tipo: {
    type: 'string',
    required: true,
    validar: validarComEnum(enumTipoQuestao),
  },
  subtipo: {
    type: 'string',
  },
  grupoIndex: {
    type: 'number',
  },
  questaoIndex: {
    type: 'number',
  },
  subquestaoIndex: {
    type: 'number',
  },
  afirmacaoIndex: {
    type: 'number',
  },
  respostaCandidato: {
    type: 'string',
  },
}
