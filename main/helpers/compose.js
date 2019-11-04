import { modelFunctionWrapper } from './modelFunctionWrapper'

const getDoAfterFunc = ({ functions, context, modelInstance, callback, index }) => error => {
  const final = functions.length
  if (error) callback(error)
  else if (index === final) callback()
  else
    functions[index](
      context,
      modelInstance,
      getDoAfterFunc({ functions, context, modelInstance, callback, index: index + 1 })
    )
}

const getArgs = args => {
  const context = args[0]
  let modelInstance, callback
  if (typeof args[1] === 'function') {
    modelInstance = null
    callback = args[1]
  } else {
    modelInstance = args[1]
    callback = args[2]
  }
  return { context, modelInstance, callback }
}

const handleCompose = functions => (...args) => {
  const { context, modelInstance, callback } = getArgs(args)
  if (Array.isArray(functions)) {
    const doAfterFirst = getDoAfterFunc({ functions, context, modelInstance, callback, index: 1 })
    functions[0](context, modelInstance, doAfterFirst)
  } else {
    throw new Error('Compose vazio.')
  }
}

const handleComposeAsync = functions => async (...args) => {
  for (let index in functions) await functions[index](...args)
}

export const composeAsync = functions => modelFunctionWrapper(handleComposeAsync(functions))

export const compose = functions => modelFunctionWrapper(handleCompose(functions))
