import { enumTipoQuestao } from 'entidades/enumTipoQuestao'

export const definirRespostaCorreta = (questao) => {
  if (questao.tipo === enumTipoQuestao.associacaoDeColunas) {
    calcularRotuloEsperado(questao)
  }
}

const calcularRotuloEsperado = (questao) => {
  const { colunaA, colunaB } = questao.associacaoDeColunas
  for (let itemB of colunaB) {
    const index = colunaA.findIndex(itemA => itemA.rotuloMatriz === itemB.rotuloMatriz)
    itemB.rotuloEsperado = index + 1
  }
}