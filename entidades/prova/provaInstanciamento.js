import { filterProps } from 'entidades/filterProps'
import { enumTiposDadosInstanciamento } from 'entidades/enumTiposDadosInstanciamento'

import { contratoProva } from './contratoProva'
import { getContratoGrupos } from './getContratoGrupos'

const required = true

const contratoQuestoesInstanciamento = {
  required,
  type: 'array',
  typeElemento: 'object',
}

export const atributosIrrelevantes = [
  'dataCadastro',
  'dataUltimaAlteracao',
  'descricao',
  'provasIds',
  'criadoPor',
  'tagIds',
  'ocultoLixeira',
  'questaoIds',
  'isDeleted',
  'deletedAt',
  'quantidadePrevistaDeQuestoes',
  'quantidadePrevistaDeCadernos',
  'tipo',
]

const atributosComuns = filterProps({ exclude: atributosIrrelevantes })(contratoProva)

export const contratoProvaInstanciamento = {
  ...atributosComuns,
  grupos: getContratoGrupos(contratoQuestoesInstanciamento),
  usuarioId: { ...contratoProva.usuarioId, required: false },
  status: { ...contratoProva.status, required: false },
  vistaProvaHabilitada: { ...contratoProva.vistaProvaHabilitada, required: false },
  tipoProva: { ...atributosComuns.tipoProva, required: false },
  numeroInstancias: { type: 'number' },
  temRedacao: { type: 'boolean' },
}

export const contratoProvaInstanciamentoTopLevel = {
  tipo: { type: 'literal', literal: enumTiposDadosInstanciamento.prova },
  ...contratoProvaInstanciamento,
}
