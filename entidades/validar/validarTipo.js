import { errorCodes } from 'entidades/errorCodes'
import { verificarSeTemTipoCerto } from './verificarSeTemTipoCerto'

export const validarTipo = ({ contratoKey, contrato, dados, validacao, dataKey }) => {
  const { type } = contrato[contratoKey]
  const prop = dados[dataKey]
  if (!verificarSeTemTipoCerto({ type, prop })) validacao.addErro(contratoKey, { code: errorCodes.tipo })
}
