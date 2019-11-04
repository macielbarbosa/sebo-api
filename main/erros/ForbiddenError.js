export class ForbiddenError extends Error {
  constructor(message, details) {
    super(message)
    this.status = 403
    this.statusCode = 403
    this.name = 'ForbiddenError'
    this.details = details
  }
}
