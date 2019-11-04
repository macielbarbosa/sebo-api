import { definirRespostaCorreta } from 'main/models/questao'

export const definirRespostasCorreta = (prova) => {
  const { grupos } = prova

  for (let grupo of grupos) {
    for (let questao of grupo.questoes) {
      definirRespostaCorreta(questao)
    }
  }
}