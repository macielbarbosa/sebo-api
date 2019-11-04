import { enumTipoTemplate } from 'entidades/enumTipoTemplate'
import { enumTipoTemplateConcurso } from 'entidades/enumTipoTemplateConcurso'

export const TEMPLATE_MAP = {
  [enumTipoTemplateConcurso.comperve]: enumTipoTemplate.provaComperve,
  [enumTipoTemplateConcurso.geral]: enumTipoTemplate.provaGeral,
}
