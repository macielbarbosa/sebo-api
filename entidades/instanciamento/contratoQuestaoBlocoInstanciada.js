import { contratoQuestaoBloco } from 'entidades/questao/contratoQuestaoBloco'
import { contratoQuestaoMultiplaEscolhaInstanciada } from 'entidades/instanciamento/contratoQuestaoMultiplaEscolhaInstanciada'
const { enunciado, bloco } = contratoQuestaoBloco
const { fraseInicial } = bloco.contrato

const required = true

export const contratoQuestaoBlocoInstanciada = {
  questaoMatrizId: { type: 'string', required },
  enunciado,
  tipo: { type: 'literal', literal: 'bloco' },
  fixa: { type: 'boolean', required },
  bloco: {
    type: 'object',
    contrato: {
      fraseInicial,
      questoes: {
        type: 'array',
        contratoElemento: contratoQuestaoMultiplaEscolhaInstanciada,
      },
    },
  },
}
