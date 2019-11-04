import { filterProps } from 'entidades/filterProps'

import { transformarContratosQuestao } from 'entidades/questao/transformarContratosQuestao'
import { getContratosQuestao } from 'entidades/questao/contratosQuestao'

export const atributosIrrelevantes = [
  'dataCadastro',
  'dataUltimaAlteracao',
  'dificuldade',
  'anoEscolar',
  'usuarioId',
  'criadoPor',
  'tagIds',
  'status',
  'elaborador',
  'isDeleted',
  'deletedAt',
  'ocultoLixeira',
  'publico',
]

const transformar = {
  singular: filterProps({ exclude: atributosIrrelevantes }),
  bloco: filterProps({ exclude: atributosIrrelevantes }),
  noBloco: filterProps({ exclude: atributosIrrelevantes }),
}

export const contratosQuestaoInstanciamento = Object.freeze(
  transformarContratosQuestao(transformar)(getContratosQuestao())
)

const getContratoQuestaoInstanciamento = () => ({
  type: 'polymorphic',
  polymorphic: {
    key: 'tipo',
    contratos: contratosQuestaoInstanciamento,
  },
})

export const contratoQuestaoInstanciamento = Object.keys(getContratoQuestaoInstanciamento())
