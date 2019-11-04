import { ValidationError } from 'main/erros'
import { addAccessTokenEmDados } from './addAccessTokenEmDados'

export const beforeCreatePreset = (entidade, contexto) => {
  if (entidade.unsetAttributesExtras) entidade.unsetAttributesExtras(contexto.instance)
  let newData = contexto.instance.toObject()
  delete newData.id
  const { accessToken } = contexto.options
  addAccessTokenEmDados({ dados: newData, accessToken })
  if (entidade.getCamposAuto) {
    const camposAuto = entidade.getCamposAuto.create(newData)
    Object.assign(newData, camposAuto)
  }
  delete newData.accessToken
  const validacao = entidade.validar(newData)
  if (validacao.sucesso) {
    Object.assign(contexto.instance, newData)
  } else {
    throw new ValidationError(validacao.erros)
  }
}
