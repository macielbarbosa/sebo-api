import { adicionarQuestoesEmProva } from './adicionarQuestoesEmProva'

export const adicionarQuestoesListagem = (contexto, instance, callback) => {
  const todasQuestoes = contexto.instance.questoes
  contexto.result.forEach(adicionarQuestoesEmProva(todasQuestoes))
  callback()
}
