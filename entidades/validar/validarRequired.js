import { errorCodes } from 'entidades/errorCodes'

export const validarRequired = ({ contratoKey, contrato, dados, validacao, dataKey }) => {
  const { required } = contrato[contratoKey]
  const prop = dados[dataKey]
  const hasEmptyValue = prop === null || prop === undefined || prop === ''
  if (required && hasEmptyValue) {
    validacao.addErro(contratoKey, { code: errorCodes.obrigatorio })
  }
}
