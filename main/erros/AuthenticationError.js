export class AuthenticationError extends Error {
  constructor(message) {
    super(message)
    this.status = 401
    this.statusCode = 401
    this.name = 'AuthenticationError'
  }
}
