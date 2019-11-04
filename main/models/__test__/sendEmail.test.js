import app from 'server/server'
import { sendEmail } from 'main/models/usuario/sendEmail'

jest.mock('server/server', () => ({
  models: {
    Usuario: {
      findOne: jest.fn().mockResolvedValue(jest.fn()),
      app: {
        models: {
          Email: {
            send: jest.fn(),
          },
        },
      },
    },
  },
}))

describe('Envia e-mail com o template correto ', () => {
  test('Envia e-mail.', () => {
    const envio = {
      email: '',
      text: jest.fn(),
      html: jest.fn(),
      isTurma: true,
    }

    const result = {
      to: envio.email,
      from: 'Equipe Educaio',
      subject: 'Modificação de senha',
      text: envio.text,
      html: envio.html,
    }
    sendEmail(envio)
    expect(app.models.Usuario.app.models.Email.send).toHaveBeenCalledTimes(1)
    expect(app.models.Usuario.app.models.Email.send.mock.calls[0][0]).toEqual(result)
  })
})
