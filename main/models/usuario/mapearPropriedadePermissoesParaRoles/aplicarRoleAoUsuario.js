import app from 'server/server'
import { mapPermissionToRolename } from 'main/models/usuario/mapPermissaoToRolename'

export const aplicarRoleAoUsuario = id => async permissao => {
  let RoleMapping = app.models.RoleMapping
  let Roledb = app.models.Role
  let idPermissao
  let roleInfo = await Roledb.findOne({
    where: { name: mapPermissionToRolename[permissao] },
  })
  idPermissao = roleInfo.id
  const role = {
    principalId: id,
    principalType: RoleMapping.USER,
    roleId: idPermissao,
  }
  await RoleMapping.create(role)
}
