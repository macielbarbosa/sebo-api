import { errorCodes } from 'entidades/errorCodes'

export const validarArrayMaiorQueZero = grupos => {
  const erros = []
  let sucesso = true
  if (Array.isArray(grupos)) {
    if (grupos.length < 1) {
      sucesso = false
      erros.push(errorCodes.peloMenosUmElemento)
    }
  } else {
    sucesso = false
    erros.push({ code: errorCodes.tipo })
  }
  return { sucesso, erros }
}
