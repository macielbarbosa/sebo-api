import { enumSeloQuestao } from 'entidades/questao'
import { errorCodes } from 'entidades/errorCodes'

import app from 'server/server'

export const isProvaValida = async prova => {
  const questoes = []
  for (let _questao of prova.grupos[0].questoes) {
    const response = await app.models.Questao.findById(_questao.questaoId)
    questoes.push(response)
  }

  for (let questao of questoes) {
    const { selo } = questao
    if (selo && selo !== enumSeloQuestao.validada) {
      return {
        sucesso: false,
        erros: [
          {
            code: errorCodes.provaInvalida,
            message: getErrosDaProva(questoes),
          },
        ],
      }
    }

    if (!selo) {
      return {
        sucesso: false,
        erros: [
          {
            code: errorCodes.provaInvalida,
            message: getErrosDaProva(questoes),
          },
        ],
      }
    }
  }

  return { sucesso: true, erros: [] }
}

const getErrosDaProva = questoes => {
  let index = 0
  const erros = []

  for (let questao of questoes) {
    const { selo } = questao
    if (selo && selo !== enumSeloQuestao.validada) {
      erros.push({
        field: `questao${index}`,
        code: errorCodes.questaoInvalida,
        message: questao.pendencias,
      })
    }

    if (!selo) {
      erros.push({
        field: `questao${index}`,
        code: errorCodes.questaoInvalida,
        message: 'Questão não possui o campo selo',
      })
    }
    index++
  }

  return erros
}
