import { errorCodes } from 'entidades/errorCodes'

/**
 * Analisar se existe alternativas sem valor V ou F associado
 * @param {string} attName
 * @param {array} sentencas
 */
export const verificarSeExisteSentencaSemValorVouFAssociado = (attName, sentencas) => {
  const erros = []
  let index = 1

  for (let sentenca of sentencas) {
    const { letra } = sentenca

    if (letra === undefined || letra === '?') {
      erros.push({
        field: `${attName}${index}`,
        code: errorCodes.sentencaSemValorVouF,
        message: 'Sentença sem valor V ou F pre-definido',
      })
    }

    index++
  }

  return erros
}
