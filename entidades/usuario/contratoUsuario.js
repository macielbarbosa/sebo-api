import { usuarioValidarEmail } from './usuarioValidarEmail'

export const contratoUsuario = {
  id: {
    type: 'string',
  },
  dataCadastro: {
    required: true,
  },
  dataUltimaAlteracao: {
    required: true,
  },
  nome: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
  },
  username: {
    type: 'string',
  },
  instituicao: {
    type: 'string',
  },
  matricula: {
    type: 'number',
  },
  email: {
    type: 'string',
    required: true,
    validar: usuarioValidarEmail,
  },
  hashSenha: {
    type: 'string',
  },
  validado: {
    type: 'boolean',
  },
  dataCricaoHashSenha: {},
  isDeleted: {},
  deletedAt: {},
}
