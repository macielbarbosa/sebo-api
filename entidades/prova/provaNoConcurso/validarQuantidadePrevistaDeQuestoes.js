import { errorCodes } from 'entidades/errorCodes'

export const validarQuantidadePrevistaDeQuestoes = valor => {
  let sucesso = true
  const erros = []
  if (valor < 1) {
    sucesso = false
    erros.push({
      code: errorCodes.quantidadePrevistaDeQuestoesInvalida,
      message: 'A quantidade de questões com a prova deve ser maior ou igual a zero.',
    })
  }
  return { sucesso, erros }
}
