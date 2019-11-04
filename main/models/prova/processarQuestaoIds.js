import { ValidationError } from 'main/erros'
import app from 'server/server'

const montarQuestaoIds = dados => {
  const questaoIds = []
  if (Array.isArray(dados.grupos)) {
    dados.grupos.forEach(grupos => {
      if (Array.isArray(grupos.questoes)) {
        grupos.questoes.forEach(questao => questaoIds.push(questao.questaoId))
      }
    })
  }
  return questaoIds
}

const queryQuestoesDeQuestaoIds = ({ usuarioId, questaoIds }) => {
  let Questao = app.models.Questao
  const filterQuestaoIds = questaoIds.map(id => ({ id }))
  const filter = { where: { and: [{ usuarioId }, { or: filterQuestaoIds }] } }
  return Questao.find(filter)
}

const validarQuestaoIds = async ({ questoes, questaoIds }) => {
  const questoesAchadas = questoes.map(questao => questao.id)
  const questoesInvalidas = questaoIds.filter(id => !questoesAchadas.includes(id))
  if (questoesInvalidas.length > 0) {
    throw new ValidationError({ code: 'questao_ids_invalido', details: { questoesInvalidas } })
  }
}

export const processarQuestaoIds = async contexto => {
  const { userId } = contexto.req.accessToken
  const dados = contexto.req.body
  if (dados.grupos) {
    const questaoIds = montarQuestaoIds(dados)
    const questoes = await queryQuestoesDeQuestaoIds({ usuarioId: userId, questaoIds })
    await validarQuestaoIds({ questoes, questaoIds })
    dados.questaoIds = questaoIds
  }
}
