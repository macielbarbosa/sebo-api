export const deletarPropsNaoPertencentesAoContrato = contrato => dados => {
  for (let propKey in dados) {
    if (!contrato[propKey]) {
      dados[propKey] = undefined
    } else if (contrato[propKey].contrato) {
      const dado = dados[propKey]
      const contratoInterno = contrato[propKey].contrato
      deletarPropsNaoPertencentesAoContrato(contratoInterno)(dado)
    } else if (contrato[propKey].contratoElemento) {
      const dado = dados[propKey]
      const contratoElemento = contrato[propKey].contratoElemento
      if (Array.isArray(dado))
        dado.forEach(elemento => deletarPropsNaoPertencentesAoContrato(contratoElemento)(elemento))
    }
  }
}
