import { usernameExiste } from 'main/models/usuario/usernameExiste'

import { achouInstancia } from 'main/helpers'

jest.mock('main/helpers', () => ({
  achouInstancia: jest.fn().mockReturnValue('achouInstancia'),
}))

describe('usuario usernameExiste', () => {
  test('Procura usuario com o username e chama achouInstancia', () => {
    const usuario = {
      findOne: jest.fn(),
    }
    const username = ''
    const cb = jest.fn()
    usernameExiste(usuario)(username, cb)
    expect(usuario.findOne).toHaveBeenCalledTimes(1)
    expect(usuario.findOne.mock.calls[0][1]).toBe('achouInstancia')
    expect(achouInstancia).toHaveBeenCalledTimes(1)
    expect(achouInstancia.mock.calls[0][0]).toBe(cb)
  })
})
