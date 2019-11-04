export class InternalError extends Error {
  constructor() {
    super('Erro interno')
    this.status = 500
    this.statusCode = 500
    this.name = 'InternalError'
    this.details = 'InternalError'
    this.message = 'InternalError'
  }
}
