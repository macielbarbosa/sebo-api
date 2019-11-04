export const getCamposAuto = contrato => dados => {
  const camposAuto = {}
  for (let campoKey in contrato) {
    const getCampo = contrato[campoKey]
    camposAuto[campoKey] = getCampo(dados)
  }
  return camposAuto
}
