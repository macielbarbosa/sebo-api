import app from 'server/server'
import { updatePassword } from 'main/models/usuario/password'

Object.defineProperty(global.self, 'bcrypt', {
  compareSync: jest.fn(),
})

jest.mock('server/server', () => ({
  models: {
    Usuario: {
      findOne: jest.fn().mockReturnValue(
        {
          username: 'docente',
          password: '$2b$10$HZYmaS8J9c9Huywxu2ffc.x2P.dsHmgYDngZhZa3R/f0Cu8vQnin6',
          email: 'docente@ufrn.br',
          nome: 'ODocente SobrenomeDocente',
          instituicao: 'UFRN',
          id: 'dccc93c2-41db-4aa8-a415-f4712e9fce10',
        },
        { save: jest.fn() },
        { then: () => {} }
      ),
    },
  },
}))

describe('Alterar senha', () => {
  test('Sucesso ao alterar senha do usuario', () => {
    const usuarioId = 'dccc93c2-41db-4aa8-a415-f4712e9fce10'
    const oldPassword = '12345678'
    const password = '12345678'
    const passwordConfirmation = '12345678'
    const cb = jest.fn()

    updatePassword(usuarioId, oldPassword, password, passwordConfirmation, cb)

    expect(app.models.Usuario.findOne).toHaveBeenCalledTimes(1)
    expect(app.models.Usuario.findOne.mock.calls[0][1]).toEqual(expect.any(Function))
  })
})
