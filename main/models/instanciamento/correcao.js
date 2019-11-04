export const correcao = (instancia, idQuestao, dados, cb) => {
  const { questoes } = instancia.prova.grupos[0]
  const questao = questoes.find(q => q.questaoMatrizId === idQuestao)
  if (questao !== undefined) {
    if (questao.tipo === 'bloco') {
      const qb = questao.bloco.questoes.find(q => q.questaoMatrizId === dados.questaoMatrizId)
      salvarCorrecao(qb, dados)
    } else {
      salvarCorrecao(questao, dados)
    }
  }

  instancia.save()
  cb(null)
}

const salvarCorrecao = (questao, dados) => {
  if (validateDadosCorrecao(dados)) {
    questao.observacao = dados.observacao
    questao.notaQuestao = dados.notaQuestao
  }
}

const validateDadosCorrecao = dados => {
  if (dados === undefined) return false
  const { observacao, notaQuestao } = dados
  if (observacao === undefined || notaQuestao === undefined) return false
  return true
}
