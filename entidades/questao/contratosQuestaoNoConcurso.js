import { filterProps } from 'entidades/filterProps'

import { contratoTagsVirtuais as tagsVirtuais } from 'entidades/tag'

import { transformarContratosQuestao } from 'entidades/questao/transformarContratosQuestao'

import { getContratosQuestao, getAtributosEspecificos } from './contratosQuestao'
import { getQuestaoAtributosComuns } from './questaoAtributosComuns'

const atributosInvalidosNoConcurso = ['fixa', 'ocultoLixeira', 'deletedAt', 'isDeleted', 'publico', 'valor', 'peso']

const atributosInvalidosEmChamadas = [
  ...atributosInvalidosNoConcurso,
  'dataCadastro',
  'dataUltimaAlteracao',
  'criadoPor',
  'questaoIds',
  'tagIds',
  'usuarioId',
]

const atributosInvalidosEmCriacao = [...atributosInvalidosEmChamadas, 'id']

const atributosInvalidosEmEdicao = [...atributosInvalidosEmChamadas, 'tipo']

const transformarEmCriacao = {
  singular: contrato => ({
    ...filterProps({ exclude: atributosInvalidosEmCriacao })(contrato),
    tagsVirtuais,
  }),
  bloco: contrato => filterProps({ exclude: atributosInvalidosEmCriacao })(contrato),
  noBloco: contrato => ({
    ...filterProps({ exclude: ['tagIds'] })(contrato),
    tagsVirtuais,
  }),
}

const transformarEmSave = {
  singular: contrato => ({
    ...filterProps({ exclude: atributosInvalidosNoConcurso })(contrato),
  }),
  bloco: contrato => filterProps({ exclude: atributosInvalidosNoConcurso })(contrato),
}

export const getContratosQuestaoNoConcursoEmCriacao = () =>
  transformarContratosQuestao(transformarEmCriacao)(getContratosQuestao())

export const getContratosQuestaoNoConcursoEmSave = () =>
  transformarContratosQuestao(transformarEmSave)(getContratosQuestao())

export const contratoQuestaoEmCriacao = {
  type: 'polymorphic',
  polymorphic: {
    key: 'tipo',
    contratos: getContratosQuestaoNoConcursoEmCriacao(),
  },
}

export const contratoQuestaoEmEdicao = filterProps({ exclude: atributosInvalidosEmEdicao })({
  ...filterProps({ exclude: ['tagIds'] })(getQuestaoAtributosComuns()),
  ...getAtributosEspecificos(),
  tagsVirtuais,
  bloco: getContratosQuestaoNoConcursoEmCriacao().bloco.bloco,
})

export const contratoQuestaoEmSave = {
  type: 'polymorphic',
  polymorphic: {
    key: 'tipo',
    contratos: getContratosQuestaoNoConcursoEmSave(),
  },
}
