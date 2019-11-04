import { errorCodes } from 'entidades/errorCodes'

import { enumStatusCaderno } from './enumStatusCaderno'
import { contratoCadernoInstanciamento } from './contratoCadernoInstanciamento'

export const atributosEspecificosParaCadernoEmConcurso = {
  status: {
    type: 'enum',
    enum: enumStatusCaderno,
    required: true,
  },
  quantidadePrevistaDeProvas: {
    type: 'number',
    required: true,
    validar: (valor, validacao) =>
      valor < 1 &&
      validacao.addErro({
        code: errorCodes.tipo,
        message: `O valor 'quantidadePrevistaDeProvas' deve ser maior que 0`,
      }),
  },
  instanciamento: contratoCadernoInstanciamento,
}
