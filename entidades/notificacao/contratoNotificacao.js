import { enumStatusNotificacao } from './enumStatusNotificacao'

const required = true

export const contratoNotificacao = {
  id: { type: 'string' },
  status: { required, type: 'enum', enum: enumStatusNotificacao },
  texto: { required, type: 'string' },
  usuarioId: { required, type: 'string' },
  dataCadastro: { required },
  dataUltimaAlteracao: {},
  isDeleted: {},
  deletedAt: {},
  rota: {
    type: 'object',
    contrato: {
      recurso: { required, type: 'string' },
      operacao: { required, type: 'string' },
      id: { required, type: 'string' },
    },
  },
}
