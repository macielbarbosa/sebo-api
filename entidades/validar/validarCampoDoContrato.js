import { validarRequired } from './validarRequired'
import { validarComFuncao } from './validarComFuncao'
import { validarTipo } from './validarTipo'
import { validarArray } from './validarArray'
import { validarContratoInterno } from './validarContratoInterno'
import { validarLiteral } from './validarLiteral'
import { validarEnum } from './validarEnum'
import { validarPolymorphic } from './validarPolymorphic'

export const validarCampoDoContrato = ({ contrato, dados, validacao, validar, options, contratoKey, dataKey }) => {
  const params = { contratoKey, dataKey, contrato, dados, validacao, validar, options }
  if (options.checkRequired) validarRequired(params)
  if (validacao.sucesso) {
    validarTipo(params)
    validarComFuncao(params)
    if (validacao.sucesso) {
      validarContratoInterno(params)
      validarArray(params)
      validarLiteral(params)
      validarEnum(params)
      validarPolymorphic(params)
    }
  }
}
