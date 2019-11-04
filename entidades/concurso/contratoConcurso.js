import { contratoCadernoDoConcurso } from 'entidades/caderno/cadernoNoConcurso'

import { enumTipoTemplateConcurso } from '../enumTipoTemplateConcurso'

import { contratoCargo } from './contratoCargo'

const required = true

export const contratoConcurso = {
  id: {
    type: 'string',
  },
  dataCadastro: {
    type: 'string',
  },
  dataUltimaAlteracao: {
    required,
  },
  titulo: {
    type: 'string',
    required,
  },
  descricao: {
    type: 'string',
  },
  opcoes: {
    type: 'object',
    required,
    contrato: {
      template: { type: 'enum', enum: enumTipoTemplateConcurso, required },
      frase: { type: 'string' },
      quantidadeAlternativasQuestoes: { type: 'number', required },
      numeroInstancias: { type: 'number', required },
      cabecalho: { type: 'string' },
    },
  },
  instrucoes: {
    required,
    type: 'array',
    typeElemento: 'string',
  },
  usuarioId: {
    required,
    type: 'string',
  },
  cargos: {
    type: 'array',
    contratoElemento: contratoCargo,
    required,
  },
  questoes: {},
  cadernos: {
    type: 'array',
    elemento: contratoCadernoDoConcurso,
    required,
  },
  exportacaoQuestoes: {
    type: 'object',
    data: { type: 'string' },
    status: { type: 'string' },
    impressaoId: { type: 'string' },
  },
  provas: {},
  isDeleted: {},
  deletedAt: {},
}
