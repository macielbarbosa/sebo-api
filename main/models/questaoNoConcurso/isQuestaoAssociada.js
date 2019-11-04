export const isQuestaoAssociada = async (questaoId, instancia) => {
  const { provas } = instancia
  const isAssociada = provas.some(({ questaoIds }) => questaoIds.includes(questaoId))
  return [isAssociada]
}
