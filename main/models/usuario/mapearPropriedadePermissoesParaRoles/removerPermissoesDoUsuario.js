import app from 'server/server'

export const removerPermissoesDoUsuario = async usuario => {
  let RoleMapping = app.models.RoleMapping
  await RoleMapping.destroyAll({ principalId: usuario.id })
}
