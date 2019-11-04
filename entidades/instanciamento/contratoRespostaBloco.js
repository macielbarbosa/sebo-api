import { validarComEnum } from '../validarComEnum'
import { enumTipoQuestao } from '../enumTipoQuestao'

export const contratoRespostaBloco = {
  tipo: {
    type: 'string',
    required: true,
    validar: validarComEnum(enumTipoQuestao),
  },
  subtipo: {
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
  subquestaoIndex: {
    type: 'number',
    required: true,
  },
  afirmacaoIndex: {
    type: 'number',
  },
  respostaCandidato: {
    type: 'string',
  },
}
