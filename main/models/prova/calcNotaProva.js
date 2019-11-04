export const calcNotaProva = async questoes => {
  return await questoes.reduce((prev, current) => {
    let nota = 0
    if (current.tipo === 'bloco') {
      for (let questao of current.bloco.questoes) {
        nota += questao.notaQuestao !== undefined ? Number(questao.notaQuestao) : 0
      }
    } else {
      nota += current.notaQuestao !== undefined ? Number(current.notaQuestao) : 0
    }
    return prev + nota
  }, 0)
}
