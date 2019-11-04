export class ValidationError extends Error {
  constructor(erros) {
    super('Erro de validação')
    this.status = 422
    this.statusCode = 422
    this.name = 'ValidationError'
    this.details = erros
  }
}
