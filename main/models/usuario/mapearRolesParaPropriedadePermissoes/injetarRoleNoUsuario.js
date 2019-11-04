import app from 'server/server'
import { enumTipoUsuario } from 'main/models/usuario/enumTipoUsuario'

const getRoles = async () => {
  let Roledb = app.models.Role
  let roleMapIdNome = {}
  let roles = await Roledb.find()
  if (roles) {
    roles.forEach(role => {
      const { name, id } = role
      roleMapIdNome[id] = name
    })
    return roleMapIdNome
  }
}

const setPermissoes = (roleMapIdNome, roleMaps, usuario, callback) => {
  let permissoes = []

  if (Array.isArray(roleMaps)) {
    roleMaps.forEach(async roleMap => {
      const { roleId } = roleMap
      let nomePermissao = roleMapIdNome[roleId]
      if (nomePermissao) permissoes.push(enumTipoUsuario[nomePermissao])
    })
    usuario.permissoes = permissoes
    callback()
  }
}

export const injetarRoleNoUsuario = (context, usuario, callback) => (err, roleMaps) => {
  getRoles().then(roleMapIdNome => {
    setPermissoes(roleMapIdNome, roleMaps, usuario, callback)
  })
}
