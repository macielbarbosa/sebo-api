import { errorCodes } from 'entidades/errorCodes'

export const contratoTag = {
  id: {
    type: 'string',
  },
  dataCadastro: {
    type: 'ISODateString',
    required: true,
  },
  dataUltimaAlteracao: {
    type: 'ISODateString',
    required: true,
  },
  nome: {
    type: 'string',
    required: true,
    validar: (nome, validacao) => nome.length > 50 && validacao.addErro({ code: errorCodes.muitoGrande }),
  },
  usuarioId: {
    type: 'string',
    required: true,
  },
  isDeleted: {},
  deletedAt: {},
}
