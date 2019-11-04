
function corrigirQuestaoVouF(questao) {
  const vq = questao.valor
  const qtn = questao.vouf.afirmacoes.length
  let qtnAcertos = 0
  questao.vouf.afirmacoes.forEach(afirmacao => {
    if (afirmacao.letra === afirmacao.respostaCandidato) qtnAcertos++
  })
  questao.notaQuestao = vq * (qtnAcertos / qtn)
}

function corrigirQuestaoMultiplaEscolha(questao) {
  if (questao.multiplaEscolha.respostaCerta === questao.multiplaEscolha.respostaCandidato)
    questao.notaQuestao = questao.valor
  else questao.notaQuestao = 0
}

function corrigirQuestaoAssociacaoDeColunas(questao) {
  const vq = questao.valor
  const qtn = questao.associacaoDeColunas.colunaB.length
  let qtnAcertos = 0
  questao.associacaoDeColunas.colunaB.forEach(associacao => {
    if (associacao.rotuloEsperado === associacao.respostaCandidato) qtnAcertos++
  })
  questao.notaQuestao = vq * (qtnAcertos / qtn)
}

export {
  corrigirQuestaoAssociacaoDeColunas,
  corrigirQuestaoMultiplaEscolha,
  corrigirQuestaoVouF,
}