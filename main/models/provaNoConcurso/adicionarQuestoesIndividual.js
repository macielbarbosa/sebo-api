import { adicionarQuestoesEmProva } from './adicionarQuestoesEmProva'

export const adicionarQuestoesIndividual = (contexto, instance, callback) => {
  const todasQuestoes = contexto.instance.questoes
  if (contexto.result) adicionarQuestoesEmProva(todasQuestoes)(contexto.result)
  callback()
}
