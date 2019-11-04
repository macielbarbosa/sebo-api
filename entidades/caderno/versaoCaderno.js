const required = true

export const versaoCaderno = {
  type: 'object',
  contrato: {
    id: { type: 'string', required },
    apelido: { type: 'string', required },
  },
  required,
}
