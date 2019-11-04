export const isProvaAssociada = async (provaId, instancia) => {
  const { cadernos } = instancia
  const isAssociada = cadernos.some(({ provasIds }) => provasIds.includes(provaId))
  return [isAssociada]
}
