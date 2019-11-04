import app from 'server/server'

import * as p from 'main/models/usuario/password'
import { sendEmail } from 'main/models/usuario/sendEmail'

jest.mock('main/models/usuario/sendEmail', () => ({
  sendEmail: jest.fn(),
}))

jest.mock('entidades/usuario/usuarioValidarPassword', () => ({
  usuarioValidarPassword: jest.fn().mockResolvedValue(true),
}))

Object.defineProperty(global.self, 'crypto', {
  randomBytes: jest.fn(),
})

jest.mock('main/models/usuario/templates', () => ({
  txtForgotEmail: jest.fn().mockReturnValue('Teste'),
  htmlForgotEmail: jest.fn().mockReturnValue('<p>Test</p>'),
}))

jest.mock('server/server', () => ({
  models: {
    Usuario: {
      findOne: jest.fn().mockReturnValue(
        (null,
        {
          save: jest.fn(),
          hashSenha: null,
          dataCricaoHashSenha: null,
        })
      ),
    },
  },
}))

describe('Busca usuários e envia e-mail com o template correto ', () => {
  test('Busca usuário', () => {
    const envio = { email: '', link: 'http://teste', txtTemplate: jest.fn(), htmlTemplate: jest.fn(), turma: {} }
    const cb = jest.fn()
    p.findUser(envio, cb)

    expect(app.models.Usuario.findOne).toHaveBeenCalledTimes(1)
    expect(app.models.Usuario.findOne.mock.calls[0][1]).toEqual(expect.any(Function))
  })

  test('Hash da senha', () => {
    const envio = { email: '', link: 'http://teste', txtTemplate: jest.fn(), htmlTemplate: jest.fn(), turma: null }
    const cb = jest.fn()
    const user = {
      save: jest.fn(),
      hashSenha: null,
      dataCricaoHashSenha: null,
    }

    p.hashSenha(envio, cb)(null, user)

    expect(user.save).toHaveBeenCalledTimes(1)
    expect(user.hashSenha).not.toBeNull()
    expect(user.dataCricaoHashSenha).not.toBeNull()
    expect(sendEmail).toHaveBeenCalledTimes(1)
  })
})
