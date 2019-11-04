export const addAttributesBeforeCreate = getAttributesToAdd => async contexto => {
  if (typeof getAttributesToAdd !== 'function') throw new Error('getAttributesToAdd de ser uma função.')
  const body = Array.isArray(contexto.req.body) ? contexto.req.body : [contexto.req.body]
  const { accessToken } = contexto.req
  if (accessToken) body.forEach(instance => Object.assign(instance, getAttributesToAdd(contexto)))
}

const getDataCadastroToAdd = () => ({ dataCadastro: new Date().toISOString() })

const getUserIdToAddAs = nome => contexto => {
  const { accessToken } = contexto.req
  if (accessToken) {
    return { [nome]: accessToken.userId }
  } else {
    console.error('getUsuarioIdToAdd: Não foi encotrado acessToken no contexto.req para adicionar.')
    return {}
  }
}

export const addUsuarioIdBeforeCreate = addAttributesBeforeCreate(getUserIdToAddAs('usuarioId'))
export const addCriadoPorBeforeCreate = addAttributesBeforeCreate(getUserIdToAddAs('criadoPor'))
export const addDataCadastroBeforeCreate = addAttributesBeforeCreate(getDataCadastroToAdd)
