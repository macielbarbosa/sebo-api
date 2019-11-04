export class BadRequest extends Error {
  constructor(message, details) {
    super(message)
    this.status = 400
    this.statusCode = 400
    this.name = 'BadRequest'
    this.details = details
  }
}
