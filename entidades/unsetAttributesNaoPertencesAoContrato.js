import { deletarPropsNaoPertencentesAoContrato } from './deletarPropsNaoPertencentesAoContrato'

export const unsetAttributesNaoPertencesAoContrato = contrato => ctx => {
  try {
    if (ctx.instance && ctx.instance.toObject()) {
      const dados = ctx.instance.toObject()
      for (let propKey in dados) {
        if (!contrato[propKey]) {
          ctx.instance.unsetAttribute(propKey)
        } else if (contrato[propKey].contrato) {
          const dado = ctx.instance[propKey]
          const contratoInterno = contrato[propKey].contrato
          deletarPropsNaoPertencentesAoContrato(contratoInterno)(dado)
        } else if (contrato[propKey].contratoElemento) {
          const dado = ctx.instance[propKey]
          const contratoElemento = contrato[propKey].contratoElemento
          if (Array.isArray(dado))
            dado.forEach(elemento => deletarPropsNaoPertencentesAoContrato(contratoElemento)(elemento))
        }
      }
    }
  } catch (err) {
    console.error(err)
  }
}
