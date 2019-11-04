export const adicionarProvasEmCaderno = todasProvas => caderno => {
  const provas = []
  const provasIds = []
  caderno.provasIds.forEach(provaId => {
    const provaAchada = todasProvas.find(prova => prova.id === provaId)
    if (provaAchada) {
      provas.push(provaAchada)
      provasIds.push(provaAchada.id)
    }
  })
  caderno.provas = provas
  caderno.provasIds = provasIds
}
