import { errorCodes } from 'entidades/errorCodes'

export const cadernoValidarMinuto = (minuto, validacao) => {
  const MINUTO_MIN = 0
  const MINUTO_MAX = 59
  if (minuto < MINUTO_MIN || minuto > MINUTO_MAX) validacao.addErro({ code: errorCodes.foraRange })
}
