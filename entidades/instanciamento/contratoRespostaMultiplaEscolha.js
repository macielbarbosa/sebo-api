import { validarComEnum } from '../validarComEnum'
import { enumTipoQuestao } from '../enumTipoQuestao'

export const contratoRespostaMultiplaEscolha = {
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
  respostaCandidato: {
    type: 'string',
  },
}
