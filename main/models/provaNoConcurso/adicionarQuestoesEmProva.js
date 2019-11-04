export const adicionarQuestoesEmProva = todasQuestoes => prova => {
  const questoes = []
  const questaoIds = []
  prova.questaoIds.forEach(questaoId => {
    const questaoAchada = todasQuestoes.find(questao => questao.id === questaoId)
    if (questaoAchada) {
      questoes.push(questaoAchada)
      questaoIds.push(questaoAchada.id)
    }
  })
  prova.questoes = questoes
  prova.questaoIds = questaoIds
}
