import { models } from 'server/server'
import { mapPermissionToRolename } from './mapPermissaoToRolename'

export const getIdUsariosByRoleId = async idRole => {
  const RoleMapping = models.RoleMapping
  let Roledb = models.Role
  let idPermissao
  let roleInfo = await Roledb.findOne({
    where: { name: mapPermissionToRolename[idRole] },
  })
  idPermissao = roleInfo.id
  const usuariosIds = await RoleMapping.find({
    where: {
      roleId: idPermissao,
    },
  })
  return usuariosIds.map(user => user.principalId)
}
