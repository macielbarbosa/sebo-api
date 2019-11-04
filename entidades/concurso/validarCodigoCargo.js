import { errorCodes } from 'entidades/errorCodes'

export const validarCodigoCargo = valor => {
  let sucesso = true
  const erros = []
  if (valor.length > 10) {
    sucesso = false
    erros.push({
      code: errorCodes.codigoCargoInvalido,
      message: 'Código do cargo inserido não é válido',
    })
  }
  return { sucesso, erros }
}
