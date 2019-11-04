import { validarSenhaAntesDeSerCriptografada } from 'main/models/usuario/validarSenhaAntesDeSerCriptografada'
import { usuarioValidarPassword } from 'entidades/usuario'

jest.mock('main/erros', () => ({
  ValidationError: Error,
}))

jest.mock('entidades/usuario', () => ({
  usuarioValidarPassword: jest.fn(),
}))

const getContexto = valido => ({
  req: {
    body: {},
  },
})

describe('validarSenhaAntesDeSerCriptografada', () => {
  it('Se usuario é válido, não throw', () => {
    usuarioValidarPassword.mockReturnValueOnce({ sucesso: true })
    const context = getContexto()
    validarSenhaAntesDeSerCriptografada(context, {})
  })
  it('Se usuario não é válido, throw', async () => {
    usuarioValidarPassword.mockReturnValueOnce({ sucesso: false })
    const context = getContexto()
    try {
      await validarSenhaAntesDeSerCriptografada(context, {})
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
})
