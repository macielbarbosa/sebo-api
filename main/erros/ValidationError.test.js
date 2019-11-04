import { ValidationError } from './ValidationError'

const errosSample = {
  accessor: { code: 'code_erro', message: 'Aconteceu um erro em accessor.' },
}

describe('ValidationErro', () => {
  it('Contructor adiciona todos os campos necessários com valores corretos.', () => {
    const validationError = new ValidationError(errosSample)
    expect(validationError.status).toBe(422)
    expect(validationError.statusCode).toBe(422)
    expect(validationError.name).toBe('ValidationError')
    expect(validationError.details).toBe(errosSample)
  })
})
