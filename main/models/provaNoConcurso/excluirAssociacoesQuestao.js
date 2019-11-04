import { models } from 'server/server'

export const excluirAssociacoesQuestao = async ({ args, instance }) => {
  const { provas } = instance
  const { fk: questaoId } = args
  const provasComAQuestao = provas.filter(({ questaoIds }) => questaoIds.includes(questaoId))
  if (provasComAQuestao.length > 0) {
    provasComAQuestao.forEach(({ questaoIds, grupos }) => {
      const questaoIdIndex = questaoIds.indexOf(questaoId)
      questaoIds.splice(questaoIdIndex, 1)
      for (let grupo of grupos) {
        const { questoes } = grupo
        const questaoIndex = questoes.findIndex(questao => questao.questaoId === questaoId)
        if (questaoIndex !== -1) {
          questoes.splice(questaoIndex, 1)
          break
        }
      }
    })
    models.Concurso.updateAll({ id: instance.id }, { provas })
  }
}
