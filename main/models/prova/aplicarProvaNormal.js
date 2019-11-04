import app from 'server/server'
import { ValidationError } from 'main/erros'

import { aplicarProva } from './aplicarProva'
import { isProvaValida } from './isProvaValida'

import { enumTipoProva } from 'entidades/enumTipoProva'

export const aplicarProvaNormal = async (provaId, dadosAplicacao, options) => {
  const instance = await app.models.Prova.findById(provaId)

  if (instance.tipoProva === enumTipoProva.convencional) {
    const validacao = await isProvaValida(instance)
    if (!validacao.sucesso) throw new ValidationError(validacao.erros)
  }
  return await aplicarProva({ instance, dadosAplicacao, options })
}
