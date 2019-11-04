import { filterProps } from 'entidades/filterProps'
import { enumTiposDadosInstanciamento } from 'entidades/enumTiposDadosInstanciamento'

import { contratoProvaInstanciamento } from 'entidades/prova/provaInstanciamento'

import { getContratoCaderno } from './contratoCaderno'

const required = true

export const atributosIrrelevantes = [
  'dataCadastro',
  'dataUltimaAlteracao',
  'descricao',
  'provasIds',
  'usuarioId',
  'isDeleted',
  'deletedAt',
  'quantidadePrevistaDeProvas',
  'status',
  'instanciamento',
]

const atributosComuns = filterProps({ exclude: atributosIrrelevantes })(getContratoCaderno())

export const getContratoCadernoInstanciamento = () => ({
  ...atributosComuns,
  provas: {
    type: 'array',
    contratoElemento: {
      ...filterProps({ exclude: ['template'] })(contratoProvaInstanciamento),
    },
    required,
  },
})

export const contratoCadernoInstanciamento = Object.freeze(getContratoCadernoInstanciamento())

export const getContratoCadernoInstanciamentoTopLevel = () => ({
  tipo: { type: 'literal', literal: enumTiposDadosInstanciamento.caderno },
  ...contratoCadernoInstanciamento,
})

export const contratoCadernoInstanciamentoTopLevel = Object.freeze(getContratoCadernoInstanciamentoTopLevel())

export const getContratoCadernoConcursoInstanciamento = () => ({
  ...filterProps({ exclude: ['template'] })(getContratoCadernoInstanciamentoTopLevel()),
  tipo: { type: 'literal', literal: enumTiposDadosInstanciamento.cadernoConcurso, required },
})

export const contratoCadernoConcursoInstanciamento = Object.freeze(getContratoCadernoConcursoInstanciamento())
