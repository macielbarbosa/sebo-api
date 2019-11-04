import { ValidationError } from 'main/erros'

export const beforeUpdatePreset = (entidade, contexto) => {
  // Impedir que o usuário troque a instância para outro dono.
  delete contexto.data.usuarioId
  const newData = {}
  const currentData = contexto.currentInstance.toObject()
  Object.assign(newData, currentData)
  Object.assign(newData, contexto.data)
  if (entidade.deletarPropsExtras) entidade.deletarPropsExtras(newData)
  if (entidade.getCamposAuto) {
    const camposAuto = entidade.getCamposAuto.update(newData)
    Object.assign(newData, camposAuto)
  }
  Object.assign(contexto.data, newData)
  const validacao = entidade.validar(contexto.data)
  if (!validacao.sucesso) {
    throw new ValidationError(validacao.erros)
  }
}
