import { errorCodes } from 'entidades/errorCodes'

export const cadernoValidarHora = (hora, validacao) => {
  const HORA_MIN = 0
  if (hora < HORA_MIN) validacao.addErro({ code: errorCodes.foraRange })
}
