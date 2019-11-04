const ordernarPorDataUltimaAlteracao = (a, b) => {
  return a.dataUltimaAlteracao > b.dataUltimaAlteracao ? -1 : a.dataUltimaAlteracao < b.dataUltimaAlteracao ? 1 : 0
}

export const orderEmbedsManyPorAlteracao = (contexto, instance, callback) => {
  try {
    contexto.result.sort(ordernarPorDataUltimaAlteracao)
  } catch (error) {
    console.log('orderEmbedsManyPorAlteracao')
    console.log(error)
  }
  callback()
}
