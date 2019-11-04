const required = true

export const atributosIrrelevantesCaderno = [
  'template',
  'dataCadastro',
  'dataUltimaAlteracao',
  'descricao',
  'provasIds',
  'usuarioId',
  'isDeleted',
  'deletedAt',
]

const getContratoOnSave = () => ({
  id: { required, type: 'string' },
  dataCadastro: { required, type: 'ISODateString' },
  usuarioId: { required, type: 'string' },
  tipo: { required, type: 'literal', literal: 'caderno' },
  idConcurso: { required, type: 'string' },
  versao: { required, type: 'string' },
  caderno: {
    required,
    type: 'object',
  },
  isDeleted: {},
  deletedAt: {},
})

export const contratoCadernoInstanciado = Object.freeze(getContratoOnSave())
