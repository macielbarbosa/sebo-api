import { errorCodes } from 'entidades/errorCodes'
import { valorSemEspacoVazio } from './valorSemEspacoVazio'

/**
 * Analisar se existe alternativas repetidas na lista de alternativas da questao.
 * O retorno é uma lista de erros apontando inconsistencias.
 * @param {string} attName
 * @param {array} sentencas
 */
export const verificarSeExisteSentencasRepetidas = (attName, sentencas) => {
  const erros = []

  let _sentencas = {}
  let index = 1

  for (let sentenca of sentencas) {
    let key = valorSemEspacoVazio(sentenca.texto)

    if (!_sentencas[key]) _sentencas[key] = []

    _sentencas[key].push({
      index: index,
      texto: sentenca.texto,
    })

    index++
  }

  for (let key of Object.keys(_sentencas)) {
    if (_sentencas[key].length > 1) {
      for (let _sentenca of _sentencas[key]) {
        erros.push({
          field: `${attName}${_sentenca.index}`,
          code: errorCodes.sentencaRepetida,
          message: 'Sentença repetida',
        })
      }
    }
  }

  return erros
}
