import { errorCodes } from 'entidades/errorCodes'
import { valorSemEspacoVazio } from './valorSemEspacoVazio'

/**
 * @param {string} attName
 * @param {string} enunciado
 */
export const verificarSeAtributoEstarVazio = (attName, enunciado) => {
  const erros = []
  let valor = valorSemEspacoVazio(enunciado)

  if (valor === '' || valor === '<p></p>') {
    erros.push({
      field: `${attName}`,
      code: errorCodes.vazio,
      message: `Valor vazio`,
    })
  }

  return erros
}
