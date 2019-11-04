import { filterProps } from 'entidades/filterProps'

import { getContratosQuestoesIndividuais } from './contratosQuestoesIndividuais'
import { getQuestaoAtributosComuns } from './questaoAtributosComuns'
import { transformarContratosQuestao } from './transformarContratosQuestao'

const required = true

const atributosQueNaoExistemEmQuestaoNoBloco = [
  'id',
  'dataCadastro',
  'dataUltimaAlteracao',
  'usuarioId',
  'criadoPor',
  'status',
  'isDeleted',
  'deletedAt',
  'ocultoLixeira',
  'publico',
]

const transformarQuestaoNoBloco = {
  singular: contratoQuestao => ({
    ...filterProps({ exclude: atributosQueNaoExistemEmQuestaoNoBloco })(contratoQuestao),
    id: { type: 'string', required },
  }),
}

const contratosQuestaoNoBloco = transformarContratosQuestao(transformarQuestaoNoBloco)(
  getContratosQuestoesIndividuais()
)

export const getContratoQuestaoBloco = () => ({
  ...filterProps({ exclude: ['dificuldade', 'anoEscolar', 'elaborador'] })(getQuestaoAtributosComuns()),
  bloco: {
    required,
    type: 'object',
    contrato: {
      fraseInicial: {
        type: 'string',
      },
      questoes: {
        required,
        type: 'array',
        elemento: {
          type: 'polymorphic',
          polymorphic: {
            key: 'tipo',
            contratos: Object.freeze(contratosQuestaoNoBloco),
          },
        },
      },
    },
  },
})

export const contratoQuestaoBloco = Object.freeze(getContratoQuestaoBloco())
