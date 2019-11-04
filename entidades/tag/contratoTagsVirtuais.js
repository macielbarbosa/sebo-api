const required = true

export const contratoTagsVirtuais = {
  type: 'array',
  typeElemento: 'object',
  contratoElemento: {
    id: {
      type: 'string',
      required,
    },
    nome: {
      type: 'string',
      required: true,
    },
    isNew: {
      type: 'boolean',
    },
  },
  required,
}
