import { validarContratoComThrow, validarComThrow } from './validar'

const getDadosRemoteMethod = (...args) => {
  let context, modelInstance
  if (args.length === 2) {
    ;[context] = args
  } else if (args.length === 3) {
    ;[context, modelInstance] = args
  } else {
    throw new Error('Esperasse que as args desse função tenha length 2 ou 3.')
  }
  if (modelInstance && modelInstance.id) {
    return { ...modelInstance.toObject(), ...context.req.body }
  } else {
    return context.req.body
  }
}

export const validarRemoteMethod = validar => async (...args) => {
  const dados = getDadosRemoteMethod(...args)
  validarComThrow({ validar, dados })
}

export const validarRemoteMethodComContrato = (contrato, options) => async (...args) => {
  const dados = getDadosRemoteMethod(...args)
  validarContratoComThrow({ contrato, options, dados })
}
