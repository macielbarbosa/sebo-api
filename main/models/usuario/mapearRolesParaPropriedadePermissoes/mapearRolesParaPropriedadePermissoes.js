import app from 'server/server'

import { injetarRoleNoUsuario } from './injetarRoleNoUsuario'

export const mapearRolesParaPropriedadePermissoes = (context, usuario, callback) => {
  let { RoleMapping } = app.models
  RoleMapping.find({ where: { principalId: usuario.id } }, injetarRoleNoUsuario(context, usuario, callback))
}
