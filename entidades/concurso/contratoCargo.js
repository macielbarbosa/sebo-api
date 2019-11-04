import { contratoEtapa } from './contratoEtapa'
import { validarCodigoCargo } from './validarCodigoCargo'
import { validarComEnum } from '../validarComEnum'
import { enumNivelCargo } from './enumNivelCargo'

const required = true

export const contratoCargo = {
  id: {
    required,
    type: 'string',
  },
  titulo: {
    required,
    type: 'string',
  },
  etapas: {
    type: 'array',
    contratoElemento: contratoEtapa,
    required,
  },
  codigo: {
    required,
    type: 'string',
    validar: validarCodigoCargo,
  },
  nivel: {
    required,
    type: 'string',
    validar: validarComEnum(enumNivelCargo),
  },
}
