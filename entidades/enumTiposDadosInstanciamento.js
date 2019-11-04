import { enumTipoQuestao } from './enumTipoQuestao'

export const enumTiposDadosInstanciamento = {
  concurso: 'concurso',
  caderno: 'caderno',
  cadernoConcurso: 'cadernoConcurso',
  prova: 'prova',
  ...enumTipoQuestao,
}
