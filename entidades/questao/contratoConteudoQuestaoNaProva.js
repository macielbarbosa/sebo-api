import { filterProps } from 'entidades/filterProps'

import { transformarContratosQuestao } from 'entidades/questao/transformarContratosQuestao'
import { getContratosQuestao } from 'entidades/questao/contratosQuestao'

const atributosIrrelevantes = [
  'dataCadastro',
  'dataUltimaAlteracao',
  'criadoPor',
  'fixa',
  'questaoIds',
  'ocultoLixeira',
  'deletedAt',
  'isDeleted',
  'tagIds',
  'usuarioId',
  'publico',
]

const transformar = {
  singular: contrato => filterProps({ exclude: atributosIrrelevantes })(contrato),
  bloco: contrato => filterProps({ exclude: atributosIrrelevantes })(contrato),
}

const getContratosNaProva = () => transformarContratosQuestao(transformar)(getContratosQuestao())

export const getContratoConteudoQuestaoNaProva = () => ({
  type: 'polymorphic',
  polymorphic: {
    key: 'tipo',
    contratos: getContratosNaProva(),
  },
})

export const contratoConteudoQuestaoNaProva = Object.freeze(getContratoConteudoQuestaoNaProva())
