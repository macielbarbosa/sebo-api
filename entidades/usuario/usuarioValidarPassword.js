export const usuarioValidarPassword = value => {
  const validacao = {
    sucesso: true,
    erros: [],
  }
  if (value.length < 8) {
    validacao.sucesso = false
    validacao.erros.push({
      message: 'A senha deve ter pelo menos oito caracteres.',
      code: 'senha_pequena',
    })
  }
  return validacao
}
