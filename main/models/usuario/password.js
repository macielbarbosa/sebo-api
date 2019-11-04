import app from 'server/server'
import moment from 'moment'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { txtForgotEmail, htmlForgotEmail } from './templates'
import { usuarioValidarPassword } from 'entidades/usuario'
import { ValidationError, NotFoundError, ForbiddenError } from 'main/erros'
import { sendEmail } from './sendEmail'
import { updateValidacaoAlunoTurmaByEmail } from 'main/models/turma'

const hashSenha = ({ email, link, txtTemplate, htmlTemplate }, cb) => (err, user) => {
  if (err) return cb(new NotFoundError(`Erro, inesperado na busca pelo e-mail: ${email}`))
  if (user) {
    const hash = crypto.randomBytes(10).toString('hex')
    user.hashSenha = hash
    user.dataCricaoHashSenha = new Date()
    user.save()

    const text = txtTemplate({ email, link: `${link}/${hash}` })
    const html = htmlTemplate({ email, link: `${link}/${hash}` })

    sendEmail({ email, text, html })
    cb()
  } else return cb(new NotFoundError(`Erro, e-mail: ${email} não encontrado`))
}

const findUser = ({ email, link, txtTemplate, htmlTemplate }, cb) => {
  try {
    const { Usuario } = app.models
    Usuario.findOne({ where: { email } }, hashSenha({ email, link, txtTemplate, htmlTemplate }, cb))
  } catch (err) {
    cb(new Error(err))
  }
}

export const forgotPassword = (email, redirect_url, cb = () => {}) => {
  const txtTemplate = txtForgotEmail
  const htmlTemplate = htmlForgotEmail
  return findUser({ email, link: redirect_url, txtTemplate, htmlTemplate }, cb)
}

export const sendValidatePassword = (email, redirect_url) => {
  return forgotPassword(email, redirect_url)
}

export const updateForgottenPassword = (hashSenha, password, passwordConfirmation, cb) => {
  try {
    const { Usuario } = app.models
    Usuario.findOne({ where: { hashSenha } }, (err, user) => {
      if (err) cb(new NotFoundError(`Erro, inesperado na busca pelo hash da senha`))
      if (user) {
        const hashExpired = moment()
          .subtract('1', 'days')
          .isAfter(user.dataCricaoHashSenha)

        if (hashExpired) {
          return cb(new ForbiddenError(`O hash de recuperação está expirado`))
        }

        if (password !== passwordConfirmation) return cb(new ValidationError(`Senhas não conferem`))

        const validacao = usuarioValidarPassword(password, true)
        if (!validacao.sucesso) return cb(new ValidationError(validacao.erros))

        user.hashSenha = null
        user.dataCricaoHashSenha = null
        user.validado = true
        user.password = password
        user.save().then(updateValidacaoAlunoTurmaByEmail(user.email))
        cb()
      } else return cb(new NotFoundError(`Erro, hash da senha não encontrado`))
    })
  } catch (err) {
    cb(new Error(err))
  }
}

export const updatePassword = (usuarioId, oldPassword, password, passwordConfirmation, cb) => {
  const { Usuario } = app.models

  Usuario.findOne({ where: { id: usuarioId } }, (err, user) => {
    const match = bcrypt.compareSync(oldPassword, user.password)
    if (match) {
      if (password !== passwordConfirmation) return cb(new ValidationError(`Senhas não conferem`))
      else {
        const validacao = usuarioValidarPassword(password, true)
        if (!validacao.sucesso) return cb(new ValidationError(validacao.erros))

        user.password = password
        user.save().then(() => {
          cb(null, { statusCode: 200 })
        })
      }
    } else return cb(new ValidationError(`Senha atual não confere`))
  })
}

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'local-test') {
  exports.findUser = findUser
  exports.hashSenha = hashSenha
}
