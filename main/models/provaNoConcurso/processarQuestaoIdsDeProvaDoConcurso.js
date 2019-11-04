import { ValidationError } from 'main/erros'

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

const queryQuestoesDeQuestaoIds = (contexto, questaoIds) => {
  const instancia = contexto.instance.toObject()
  const questoes = []
  instancia.questoes.forEach(questao => {
    if (questaoIds.includes(questao.id)) questoes.push(questao)
  })
  return questoes
}

const validarQuestaoIds = ({ questoes, questaoIds }) => {
  const questoesAchadas = questoes.map(questao => questao.id)
  const questoesInvalidas = questaoIds.filter(id => !questoesAchadas.includes(id))
  if (questoesInvalidas.length > 0) {
    throw new ValidationError({ code: 'questao_ids_invalido', details: { questoesInvalidas } })
  }
}

const getQuestaoIds = (dados, contexto) => {
  if (dados.grupos) {
    const questaoIds = montarQuestaoIds(dados)
    const questoes = queryQuestoesDeQuestaoIds(contexto, questaoIds)
    validarQuestaoIds({ questoes, questaoIds })
    return questaoIds
  } else {
    return
  }
}

export const processarQuestaoIdsDeProvaDoConcurso = (contexto, instance, callback) => {
  const questaoIds = getQuestaoIds(contexto.req.body, contexto)
  if (questaoIds) contexto.req.body.questaoIds = questaoIds
  callback()
}
