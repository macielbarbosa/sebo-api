/* eslint-disable no-useless-escape */
export const usuarioValidarEmail = value => {
  const validacao = {
    sucesso: true,
    erros: [],
  }
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!regexEmail.test(value)) {
    validacao.sucesso = false
    validacao.erros.push({
      message: 'Email inválido.',
      code: 'email_invalido',
    })
  }
  return validacao
}
