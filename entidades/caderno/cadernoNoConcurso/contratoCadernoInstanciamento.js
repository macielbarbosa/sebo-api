const required = true

export const statusInstanciamentoCaderno = {
  naoInstanciado: 'naoInstanciado',
  gerando: 'gerando',
  pronto: 'pronto',
  cancelado: 'cancelado',
  excluido: 'excluido',
  erro: 'erro',
}

const propriedadesComunsInstanciamento = {
  dataInstanciamento: { type: 'ISODateString', required },
  versao: { type: 'string', required },
  impressaoId: { type: 'string' },
}

const contratosInstanciamento = {
  [statusInstanciamentoCaderno.naoInstanciado]: {
    status: { type: 'literal', literal: statusInstanciamentoCaderno.naoInstanciado },
  },
  [statusInstanciamentoCaderno.gerando]: {
    status: { type: 'literal', literal: statusInstanciamentoCaderno.gerando },
    ...propriedadesComunsInstanciamento,
  },
  [statusInstanciamentoCaderno.pronto]: {
    status: { type: 'literal', literal: statusInstanciamentoCaderno.pronto },
    ...propriedadesComunsInstanciamento,
  },
  [statusInstanciamentoCaderno.cancelado]: {
    status: { type: 'literal', literal: statusInstanciamentoCaderno.cancelado },
    dataCancelamento: { type: 'ISODateString', required },
    ...propriedadesComunsInstanciamento,
  },
  [statusInstanciamentoCaderno.excluido]: {
    status: { type: 'literal', literal: statusInstanciamentoCaderno.excluido },
    dataExluido: { type: 'ISODateString', required },
    ...propriedadesComunsInstanciamento,
  },
  [statusInstanciamentoCaderno.erro]: {
    status: { type: 'literal', literal: statusInstanciamentoCaderno.erro },
    ...propriedadesComunsInstanciamento,
  },
}

export const contratoCadernoInstanciamento = {
  type: 'polymorphic',
  polymorphic: {
    key: 'status',
    contratos: contratosInstanciamento,
  },
  required,
}
