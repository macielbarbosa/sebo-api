import { contratoOperacao } from './operacoesImpressao'

const required = true

export const contratoMensagem = Object.freeze({
  id: { type: 'string', required },
  url: { type: 'string', required },
  impressaoId: { type: 'string', required },
  status: { type: 'string', required },
  operacao: contratoOperacao,
})
