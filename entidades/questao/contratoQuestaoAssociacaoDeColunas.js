import { getQuestaoAtributosComuns } from './questaoAtributosComuns'
import { errorCodes } from 'entidades/errorCodes'

const contratoAfirmacaoAssociacaoDeColunas = {
  rotulo: {
    type: 'number',
    validar: valor => {
      if (valor < 0)
        return { sucesso: false, erros: [{ code: errorCodes.rotuloInvalido, message: `Rotulo ${valor} invalido` }] }
      return { sucesso: true, erros: [] }
    },
  },
  conteudo: {
    required: false,
    type: 'string',
  },
}

export const getContratoQuestaoAssociacaoDeColunas = () => ({
  ...getQuestaoAtributosComuns(),
  associacaoDeColunas: {
    required: true,
    type: 'object',
    contrato: {
      colunaA: {
        required: true,
        type: 'array',
        typeElemento: 'object',
        contratoElemento: contratoAfirmacaoAssociacaoDeColunas,
      },
      colunaB: {
        required: true,
        type: 'array',
        typeElemento: 'object',
        contratoElemento: contratoAfirmacaoAssociacaoDeColunas,
      },
    },
  },
})

export const contratoQuestaoAssociacaoDeColunas = Object.freeze(getContratoQuestaoAssociacaoDeColunas())
