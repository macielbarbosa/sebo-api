export const converterTagVirtualEmTagId = dicionarioTagsCriadas => tagVirtual => {
  if (tagVirtual.isNew) return dicionarioTagsCriadas[tagVirtual.id]
  else return tagVirtual.id
}
