import { validarComThrow } from 'main/helpers/validar'
import { validar as validarContrato } from 'entidades/validar'

export const getDadosOnSave = contexto => {
  if (contexto.instance) {
    return contexto.instance.toObject()
  } else if (contexto.currentInstance && contexto.data) {
    return { ...contexto.currentInstance.toObject(), ...JSON.parse(JSON.stringify(contexto.data)) }
  }
}

export const validarOnSave = validar => async contexto => {
  const dados = getDadosOnSave(contexto)
  if (dados) validarComThrow({ validar, dados })
}

export const validarContratoOnSave = contrato => validarOnSave(validarContrato(contrato))

export const addAttributesOnSave = getAttributesToAdd => async contexto => {
  const atributesToSave = getAttributesToAdd(contexto)
  if (contexto.data && contexto.currentInstance) Object.assign(contexto.data, atributesToSave)
  else if (contexto.instance) Object.assign(contexto.instance, atributesToSave)
}

const getDataUltimaAlteracaoToAdd = () => ({
  dataUltimaAlteracao: new Date().toISOString(),
})

export const addDataUltimaAlteracaoOnSave = addAttributesOnSave(getDataUltimaAlteracaoToAdd)

/**
 * OnNewInstance não funciona para modelos embed, e para o método updateOrCreate, priorizar colocar lógica que
 * deve rodar onCreate nos remotes hooks de criação.
 */
export const addAttributesOnNewInstance = addAttributes => async contexto => {
  const atributesToSave = addAttributes(contexto)
  if (contexto.instance && contexto.isNewInstance) Object.assign(contexto.instance, atributesToSave)
}

const getDataCadastroToAdd = () => ({
  dataCadastro: new Date().toISOString(),
})

export const addDataCadastroOnNewInstance = addAttributesOnNewInstance(getDataCadastroToAdd)

export const transferAttributesToHookState = attributes => async contexto => {
  if (Array.isArray(attributes)) {
    const dados = getDadosOnSave(contexto)
    if (dados !== undefined) {
      attributes.forEach(attribute => {
        contexto.hookState[attribute] = dados[attribute]
        if (contexto.instance) contexto.instance.unsetAttribute(attribute)
        else if (contexto.data) delete contexto.data[attribute]
      })
    }
  } else console.error('transferAttributesToHookState: attributes deve ser um array. attributes:', attributes)
}
