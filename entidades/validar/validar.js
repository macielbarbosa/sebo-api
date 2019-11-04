import { errorCodes } from 'entidades/errorCodes'
import { getOptions } from './getOptions'
import { validarCampoDoContrato } from './validarCampoDoContrato'
import { validarStrict } from './validarStrict'
import { Validation } from './Validation'

const validarContratoVazio = ({ contrato, validacao }) => {
  if (typeof contrato !== 'object') {
    validacao.addErro('contrato', { code: errorCodes.dadosNullOuUndefined })
  }
  return validacao
}

const validarDadosVazios = ({ dados, validacao }) => {
  if (!dados) {
    validacao.addErro('dados', { code: errorCodes.dadosNullOuUndefined })
  }
  return validacao
}

const verifyContratoTopLevel = ({ type, contrato, polymorphic, validar }) => {
  const isObjectContract = type === 'object' && typeof contrato === 'object'
  const isPolymorphicContract = type === 'polymorphic' && typeof polymorphic === 'object'
  const isGerericContract = typeof type === 'string' && typeof validar === 'function'
  return isObjectContract || isPolymorphicContract || isGerericContract
}

const validateNamedFields = ({ contrato, dados, validacao, options }) => {
  const missingValidationDataKeys = new Set(Object.keys(dados))
  for (let contratoKey in contrato) {
    validarCampoDoContrato({
      contrato,
      dados,
      validacao,
      validar,
      options,
      contratoKey,
      dataKey: contratoKey,
    })
    if (missingValidationDataKeys.has(contratoKey)) missingValidationDataKeys.delete(contratoKey)
  }
  return { missingValidationDataKeys, validacao }
}

const validateGerericFields = ({ contrato, dados, validacao, options, missingValidationDataKeys }) => {
  for (let dataKey of missingValidationDataKeys) {
    validarCampoDoContrato({ contrato, dados, validacao, validar, options, contratoKey: '*', dataKey })
  }
  return validacao
}

const validateFields = ({ contrato, dados, validacao, options }) => {
  let missingValidationDataKeys
  options = getOptions(options)
  const contratoKeys = Object.keys(contrato)
  const genericKeyIndex = contratoKeys.findIndex(key => key === '*')
  const allowGenericKey = genericKeyIndex > -1
  if (allowGenericKey) contratoKeys.splice(genericKeyIndex, 1)
  ;({ missingValidationDataKeys, validacao } = validateNamedFields({ contrato, dados, validacao, options }))
  if (allowGenericKey)
    validacao = validateGerericFields({ contrato, dados, validacao, options, missingValidationDataKeys })
  if (options.strict) validarStrict({ contrato, dados, validacao })
  return validacao
}

export const validar = (contrato, options) => dados => {
  let validacao = new Validation()
  validacao = validarContratoVazio({ contrato, validacao })
  if (!validacao.sucesso) return validacao
  validacao = validarDadosVazios({ dados, validacao })
  if (!validacao.sucesso) return validacao
  if (verifyContratoTopLevel(contrato)) return validar({ dados: contrato }, { ...options, isTopLevel: true })({ dados })
  validacao = validateFields({ contrato, dados, validacao, options })
  return validacao
}
