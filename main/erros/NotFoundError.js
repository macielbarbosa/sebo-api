export class NotFoundError extends Error {
  constructor(message, details) {
    super(message)
    this.status = 404
    this.statusCode = 404
    this.name = 'NotFoundError'
    this.details = { message, ...details }
  }
}
