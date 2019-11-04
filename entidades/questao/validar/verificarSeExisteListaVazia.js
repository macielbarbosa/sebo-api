import { errorCodes } from 'entidades/errorCodes'

export const verificarSeExisteListaVazia = (attrName, lista) => {
  const erros = []
  if (!lista || lista.length === 0) {
    erros.push({
      field: attrName,
      code: errorCodes.vazio,
      message: `${attrName} vazia`,
    })
  }
  return erros
}
