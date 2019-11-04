import app from 'server/server'
import { InternalError } from 'main/erros'

export const sendEmail = ({ email, text, html }) => {
  try {
    const { Usuario } = app.models
    Usuario.app.models.Email.send(
      {
        to: email,
        from: 'Equipe Educaio',
        subject: 'Modificação de senha',
        text,
        html,
      },
      function(err, mail) {
        if (err) console.log(`Erro ao enviar email: ` + err)
        else console.log(`Email sent to ${email}`)
      }
    )
  } catch (error) {
    return new InternalError(error)
  }
}
