import { errorCodes } from 'entidades/errorCodes'

export const validarDificuldade = valor => {
  let sucesso = true
  const erros = []
  if (valor < 1 || valor > 3) {
    sucesso = false
    erros.push({
      code: errorCodes.foraRange,
      message: 'Dificuldade deve estar entre 1 e 3',
    })
  }
  return { sucesso, erros }
}
