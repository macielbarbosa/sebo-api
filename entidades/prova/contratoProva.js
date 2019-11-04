import { validarComEnum } from '../validarComEnum'
import { enumStatusAplicacao } from '../enumStatusAplicacao'
import { enumTipoTemplateProva } from './enumTipoTemplateProva'
import { enumTipoEmbaralhamento } from '../enumTipoEmbaralhamento'
import { enumTipoProva } from '../enumTipoProva'
import { enumSistemaDeNota } from './enumSistemaDeNota'
import { contratoDadosAplicacao } from './contratoDadosAplicacao'
import { getContratoGrupos } from './getContratoGrupos'
import { contratoEstatisticasProva } from '../contratoEstatisticasProva'

const required = true

const contratoQuestaoNoGrupo = {
  questaoId: { type: 'string', required },
  fixa: { type: 'boolean', required },
  valor: { type: 'number' },
  peso: { type: 'number' },
}

export const contratoQuestoesNaProva = {
  type: 'array',
  typeElemento: 'object',
  contratoElemento: {
    ...contratoQuestaoNoGrupo,
    bloco: {
      type: 'array',
      typeElemento: 'object',
      contratoElemento: contratoQuestaoNoGrupo,
    },
  },
}

const contratoCriterio = {
  tipo: {
    type: 'string',
  },
  criterios: {
    type: 'object',
    contrato: {
      dificuldade: {
        type: 'number',
      },
      tipo: {
        type: 'string',
      },
      anoEscolar: {
        type: 'string',
      },
      quantidade: {
        type: 'number',
      },
      tags: {
        type: 'array',
        typeElemento: 'object',
      },
    },
  },
}

const contratoProvaDinamica = {
  type: 'array',
  typeElemento: 'object',
  contratoElemento: contratoCriterio,
}

export const contratoProva = {
  id: {
    type: 'string',
  },
  dataCadastro: { type: 'ISODateString', required },
  dataUltimaAlteracao: { type: 'ISODateString', required },
  descricao: {
    type: 'string',
    required,
  },
  titulo: {
    type: 'string',
    required,
  },
  tema: {
    type: 'string',
  },
  dataAplicacao: {},
  instituicao: {
    type: 'string',
  },
  tipoProva: {
    required,
    type: 'string',
    validar: validarComEnum(enumTipoProva),
  },
  grupos: getContratoGrupos(contratoQuestoesNaProva),
  dinamica: contratoProvaDinamica,
  sistemaDeNotasDaProva: {
    type: 'string',
    validar: validarComEnum(enumSistemaDeNota),
  },
  valor: {
    type: 'number',
  },
  usuarioId: {
    type: 'string',
    required,
  },
  criadoPor: {
    type: 'string',
    required,
  },
  tagIds: {
    type: 'array',
    required,
    typeElemento: 'string',
  },
  tipoEmbaralhamento: {
    type: 'number',
    validar: validarComEnum(enumTipoEmbaralhamento),
    required,
  },
  nomeProfessor: {
    type: 'string',
  },
  isDeleted: {},
  deletedAt: {},
  ocultoLixeira: {},
  template: {
    type: 'enum',
    enum: enumTipoTemplateProva,
    required,
  },
  status: {
    type: 'enum',
    enum: enumStatusAplicacao,
    required,
  },
  vistaProvaHabilitada: {
    type: 'boolean',
    required,
  },
  dadosAplicacao: {
    type: 'object',
    contrato: contratoDadosAplicacao,
  },
  estatisticas: {
    type: 'object',
    contrato: contratoEstatisticasProva,
  },
  questaoIds: {
    type: 'array',
    typeElemento: 'string',
    required,
  },
  questoes: { type: 'array' },
  tags: { type: 'array' },
  valorDaProva: {
    type: 'number',
  },
}
