const getCallback = args => {
  for (let i in args) {
    if (typeof args[i] === 'function') return args[i]
  }
  return null
}

const logarDetalhesDeValidacao = error => {
  console.error('Detalhes da falha de validação:')
  console.error('%j', error.details)
}

const handleError = (error, callback) => {
  const status = String(error.status)
  if (status[0] === '4') {
    if (status === '422') logarDetalhesDeValidacao(error)
    callback(error)
  } else {
    console.error('defaultTryCatch')
    console.error(error)
    callback(new Error())
  }
}

const applyDefaultTryCatch = func => (...args) => {
  const callback = getCallback(args)
  try {
    func(...args)
  } catch (error) {
    handleError(error, callback)
  }
}

const allowAsyncSyntax = func => (...args) => {
  const callback = getCallback(args)
  if (!callback) return func(...args)
  const promise = func(...args)
  if (promise instanceof Promise) {
    promise
      .then(response => {
        if (Array.isArray(response)) callback(null, ...response)
        else callback(response)
      })
      .catch(error => {
        handleError(error, callback)
      })
  }
}

export const modelFunctionWrapper = func => applyDefaultTryCatch(allowAsyncSyntax(func))
