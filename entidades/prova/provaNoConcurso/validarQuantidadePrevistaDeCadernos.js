import { errorCodes } from 'entidades/errorCodes'

export const validarQuantidadePrevistaDeCadernos = valor => {
  let sucesso = true
  const erros = []
  if (valor < 1) {
    sucesso = false
    erros.push({
      code: errorCodes.quantidadePrevistaDeCadernosInvalida,
      message: 'A quantidade de cadernos com a prova deve ser maior ou igual a zero.',
    })
  }
  return { sucesso, erros }
}
