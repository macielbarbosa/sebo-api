export const contratoEtapa = {
  id: {},
  titulo: {
    type: 'string',
    required: true,
  },
  cadernos: {
    type: 'array',
    typeElemento: 'string',
  },
}
