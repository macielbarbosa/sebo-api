const required = true

export const contratoQuestaoCedida = {
  id: {
    type: 'string',
  },
  remetente: {
    required,
    type: 'string',
  },
  destinatario: {
    required,
    type: 'string',
  },
  questao: {
    required,
    type: 'object',
  },
  isDeleted: {},
  deletedAt: {},
  ocultoLixeira: {},
}
