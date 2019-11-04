import { contratoQuestaoMultiplaEscolha } from 'entidades/questao/contratoQuestaoMultiplaEscolha'

const required = true

const { enunciado, multiplaEscolha } = contratoQuestaoMultiplaEscolha

const { respostaCerta, alternativas } = multiplaEscolha.contrato

const { texto } = alternativas.contratoElemento

export const contratoQuestaoMultiplaEscolhaInstanciada = {
  enunciado,
  dificuldade: { type: 'number' },
  tipo: { type: 'literal', literal: 'multiplaEscolha' },
  questaoMatrizId: { type: 'string', required },
  numeroNaMatriz: { type: 'number', required },
  numeroNaInstancia: { type: 'number', required },
  fixa: { type: 'boolean', required },
  multiplaEscolha: {
    type: 'object',
    contrato: {
      respostaCerta,
      respostaCandidato: { type: 'string' },
      dataRespostaCandidato: {},
      alternativasPorLinha: {},
      alternativas: {
        type: 'array',
        contratoElemento: {
          texto,
          letraNaMatriz: { type: 'string', required },
          letraNaInstancia: { type: 'string', required },
        },
        required,
      },
    },
    required,
  },
}
