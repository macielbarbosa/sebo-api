import app from 'server/server'
import { ajustarAtributosParaNovaQuestao } from '../questao'

export const aceitarCompartilhamento = async dados => {
  try {
    const questaoCedida = await app.models.QuestaoCedida.findById(dados.id)

    const { questao, destinatario } = questaoCedida
    questao.destinatario = destinatario

    const novaQuestao = await ajustarAtributosParaNovaQuestao(questao, destinatario)

    const questaoCriada = await app.models.Questao.create(novaQuestao)

    questaoCedida.destroy()

    return [questaoCriada]
  } catch (error) {
    new Error(error)
  } finally {
  }
}
