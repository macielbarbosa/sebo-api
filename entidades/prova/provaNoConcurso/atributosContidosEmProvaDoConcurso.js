import { validarQuantidadePrevistaDeCadernos } from './validarQuantidadePrevistaDeCadernos'
import { validarQuantidadePrevistaDeQuestoes } from './validarQuantidadePrevistaDeQuestoes'

export const atributosContidosEmProvaDoConcurso = {
  quantidadePrevistaDeQuestoes: {
    type: 'number',
    required: true,
    validar: validarQuantidadePrevistaDeQuestoes,
  },
  quantidadePrevistaDeCadernos: {
    type: 'number',
    required: true,
    validar: validarQuantidadePrevistaDeCadernos,
  },
}
