import { emailExiste } from 'main/models/usuario/emailExiste'

import { achouInstancia } from 'main/helpers'

jest.mock('main/helpers', () => ({
  achouInstancia: jest.fn().mockReturnValue('achouInstancia'),
}))

describe('usuario emailExiste', () => {
  test('Procura usuario com o email e chama achouInstancia', () => {
    const usuario = {
      findOne: jest.fn(),
    }
    const email = ''
    const cb = jest.fn()
    emailExiste(usuario)(email, cb)
    expect(usuario.findOne).toHaveBeenCalledTimes(1)
    expect(usuario.findOne.mock.calls[0][1]).toBe('achouInstancia')
    expect(achouInstancia).toHaveBeenCalledTimes(1)
    expect(achouInstancia.mock.calls[0][0]).toBe(cb)
  })
})
