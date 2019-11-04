import app from 'server/server'
import { ajustarAtributosParaNovaQuestao } from './ajustarAtributosParaNovaQuestao'

export const copiarQuestaoPublica = async (dados, options) => {
  try {
    if (dados.publico) {
      const { userId } = options.accessToken

      const novaQuestao = await ajustarAtributosParaNovaQuestao(dados, userId)

      const questao = await app.models.Questao.create(novaQuestao)

      return [questao]
    }
    return []
  } catch (error) {
    new Error(error)
  }
}
