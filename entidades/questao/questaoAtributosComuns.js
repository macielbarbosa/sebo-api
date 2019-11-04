import { validarDificuldade } from './validarDificuldade'
import { enumStatusQuestao } from './enumStatusQuestao'
import { enumAnoEscolar } from './enumAnoEscolar'
import { enumSeloQuestao } from './enumSeloQuestao'
import { getContratoEstatisticasDaQuestao } from './contratoEstatisticasDaQuestao'

const required = true

export const getQuestaoAtributosComuns = () => ({
  id: {
    type: 'string',
  },
  dataCadastro: {
    required,
  },
  dataUltimaAlteracao: {
    required,
  },
  enunciado: {
    type: 'string',
    required: false,
  },
  dificuldade: {
    type: 'number',
    validar: validarDificuldade,
    required,
  },
  anoEscolar: {
    type: 'enum',
    enum: enumAnoEscolar,
    required,
  },
  tipo: {
    required: true,
    type: 'string',
  },
  usuarioId: {
    type: 'string',
    required: true,
  },
  criadoPor: {
    type: 'string',
    required: true,
  },
  tagIds: {
    type: 'array',
    typeElemento: 'string',
    required: true,
  },
  status: {
    type: 'enum',
    enum: enumStatusQuestao,
    required: true,
  },
  elaborador: {
    type: 'string',
  },
  destinatario: {
    type: 'string',
  },
  selo: {
    type: 'enum',
    enum: enumSeloQuestao,
    required: false,
  },
  pendencias: {
    type: 'array',
    typeElemento: 'object',
    required: false,
  },
  estatisticas: {
    type: 'object',
    contrato: getContratoEstatisticasDaQuestao(),
    required: false,
  },
  isDeleted: {},
  deletedAt: {},
  ocultoLixeira: {},
  fixa: {},
  peso: { type: 'number' },
  valor: { type: 'number' },
  publico: {
    type: 'boolean',
    required: true,
  },
})

export const questaoAtributosComuns = getQuestaoAtributosComuns()
