import { contratoOperacao } from './operacoesInstanciamento'

const required = true

export const enumStatusFila = {
  fila: 'EM FILA',
  processandoJson: 'PROCESSANDO JSON',
  gerandoInstancias: 'GERANDO INSTANCIAS',
  pronto: 'PRONTO',
  error: 'ERROR',
}

export const contratoMensagem = {
  id: { type: 'string', required },
  operacao: contratoOperacao,
  dados: { type: 'object' },
  statusInstanciamento: { type: 'enum', enum: enumStatusFila, required },
}
