import { filterProps } from 'entidades/filterProps'

import { validarConteudoQuestaoNaProva } from 'entidades/questao'

import { contratoProva } from './contratoProva'
import { getContratoGrupos } from './getContratoGrupos'

const atributosComunsKeys = [
  'titulo',
  'tema',
  'dataAplicacao',
  'instituicao',
  'tipo',
  'tipoProva',
  'tipoEmbaralhamento',
  'nomeProfessor',
  'template',
  'dinamica',
  'valor',
  'valorDaProva',
  'sistemaDeNotasDaProva',
]

const atributosComuns = filterProps({ include: atributosComunsKeys })(contratoProva)

const contratoQuestoesEmPreviewProva = {
  required: true,
  type: 'array',
  typeElemento: 'object',
  validarElemento: validarConteudoQuestaoNaProva,
}

export const contratoChamadaPreviewProva = {
  ...atributosComuns,
  tipoProva: { ...atributosComuns.tipoProva, required: false },
  grupos: getContratoGrupos(contratoQuestoesEmPreviewProva),
}
