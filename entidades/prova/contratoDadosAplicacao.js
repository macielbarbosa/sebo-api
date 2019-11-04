import { contratoQuestao } from 'entidades/questao/contratoQuestao'

import { enumTipoAplicacao } from 'entidades/enumTipoAplicacao'
import { validarComEnum } from 'entidades/validarComEnum'

import { contratoProvaPapel } from './contratoProvaPapel'
import { contratoProvaVirtual } from './contratoProvaVirtual'
import { getContratoGrupos } from './getContratoGrupos'

const required = true

const contratoQuestoesEmDadosAplicacao = {
  required,
  type: 'array',
  elemento: contratoQuestao,
}

export const contratoDadosAplicacao = {
  tipoAplicacao: {
    type: 'string',
    validar: validarComEnum(enumTipoAplicacao),
    required,
  },
  virtual: {
    type: 'object',
    contrato: contratoProvaVirtual,
  },
  papel: {
    type: 'object',
    contrato: contratoProvaPapel,
  },
  dataInstanciamento: {},
  participantes: {
    type: 'array',
    required,
  },
  grupos: getContratoGrupos(contratoQuestoesEmDadosAplicacao),
  notasPublicadas: {
    type: 'boolean',
  },
}
