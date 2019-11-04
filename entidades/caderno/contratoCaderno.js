import { contratoDuracao } from './contratoDuracao'
import { validarComEnum } from '../validarComEnum'
import { enumTipoTemplateCaderno } from './enumTipoTemplateCaderno'
import { contratoProva } from 'entidades/prova/contratoProva'

export const getContratoCaderno = () => ({
  id: {
    type: 'string',
  },
  dataCadastro: {
    required: true,
  },
  dataUltimaAlteracao: {
    required: true,
  },
  titulo: {
    type: 'string',
    required: true,
  },
  descricao: {
    type: 'string',
    required: true,
  },
  usuarioId: {
    type: 'string',
    required: true,
  },
  provasIds: {
    type: 'array',
    typeElemento: 'string',
    required: true,
  },
  provas: {
    type: 'array',
    contratoElemento: contratoProva,
  },
  template: {
    type: 'string',
    required: true,
    validar: validarComEnum(enumTipoTemplateCaderno),
  },
  duracao: {
    type: 'object',
    contrato: contratoDuracao,
  },
  fraseDeRodape: {
    type: 'string',
  },
  cabecalho: {
    type: 'string',
  },
  instrucoes: {
    type: 'array',
    required: true,
    typeElemento: 'string',
  },
  isDeleted: {},
  deletedAt: {},
})

export const contratoCaderno = Object.freeze(getContratoCaderno())
