import { enumTipoTemplateQuestao } from './questao/enumTipoTemplateQuestao'
import { enumTipoTemplateProva } from './prova/enumTipoTemplateProva'
import { enumTipoTemplateCaderno } from './caderno/enumTipoTemplateCaderno'
import { enumTipoTemplateConcurso } from './enumTipoTemplateConcurso'
import { enumTipoTemplateRecursoDeQuestao } from './enumTipoTemplateRecursoDeQuestao'
import { enumTipoTemplateCapa } from './enumTipoTemplateCapa'

export const enumTipoTemplate = {
  gabaritoConcurso: 'geral/gabaritoConcurso',
  ...enumTipoTemplateQuestao,
  ...enumTipoTemplateProva,
  ...enumTipoTemplateCaderno,
  ...enumTipoTemplateConcurso,
  ...enumTipoTemplateRecursoDeQuestao,
  ...enumTipoTemplateCapa,
}
