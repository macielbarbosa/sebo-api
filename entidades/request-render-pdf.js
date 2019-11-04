import { contratoOperacao } from './operacoesImpressao'

const required = true

export const contratoMensagem = Object.freeze({
  id: { type: 'string', required },
  template: { type: 'string', required },
  dados: { type: 'object', required },
  impressaoId: { type: 'string', required },
  operacao: contratoOperacao,
})
