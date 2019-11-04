import { cadernoValidarHora } from './cadernoValidarHora'
import { cadernoValidarMinuto } from './cadernoValidarMinuto'
export const contratoDuracao = {
  hora: {
    type: 'number',
    required: true,
    validar: cadernoValidarHora,
  },
  minuto: {
    type: 'number',
    required: true,
    validar: cadernoValidarMinuto,
  },
}
