import { errorCodes } from 'entidades/errorCodes'
import { valorSemEspacoVazio } from './valorSemEspacoVazio'

/*
 * Verificar se existe sentencas vazias
 * @param {string} attName
 * @param {array} sentencas
 */
export const verificarSeExisteSentencasVazias = (attName, sentencas) => {
  const erros = []

  let index = 1

  for (let sentenca of sentencas) {
    let valor = valorSemEspacoVazio(sentenca.texto)

    if (valor === '' || valor === '<p></p>') {
      erros.push({
        field: `${attName}${index}`,
        code: errorCodes.vazio,
        message: `Valor vazio`,
      })
    }

    index++
  }

  return erros
}
