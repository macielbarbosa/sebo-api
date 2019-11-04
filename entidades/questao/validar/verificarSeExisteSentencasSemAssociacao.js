import { errorCodes } from 'entidades/errorCodes'

/**
 * Verificar se existe sentencas soltas em questoes de associacao entre colunas
 * @param {Array} colunas // Lista de sentencas da questao
 */
export const verificarSeExisteSentencasSemAssociacao = colunas => {
  const { colunaA, colunaB } = colunas
  const erros = []
  let index = 0

  for (let itemB of colunaB) {
    let itemEstarAssociado = false

    for (let itemA of colunaA) {
      if (itemB.rotulo === itemA.rotulo) itemEstarAssociado = true
    }

    if (!itemEstarAssociado) {
      erros.push({
        field: `colunaB${index}`,
        code: errorCodes.sentencaSemAssociacao,
        message: `Setença ${index} não possui associação com nenhum elemento da coluna A`,
      })
    }

    index++
  }

  return erros
}
