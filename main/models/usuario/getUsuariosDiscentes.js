import { models } from 'server/server'
import { enumTipoUsuario } from './enumTipoUsuario'
import { getIdUsariosByRoleId } from './getIdUsariosByRoleId'
import { getUsuarios } from './usuariosByPerfil'

export const getUsuariosDiscentes = async (value = '', usuariosJaSelecionados = [], cb) => {
  try {
    const usuarios = await getUsuarios({ value, usuariosJaSelecionados, roleId: enumTipoUsuario.discente })
    cb(null, usuarios)
  } catch (e) {
    cb(new Error())
  }
}

export const getUsuariosDiscentesByEmail = (email = '', cb) => {
  try {
    getIdUsariosByRoleId(enumTipoUsuario.discente).then(res => {
      const { Usuario } = models
      const filter = {
        where: {
          and: [{ id: { inq: res }, isDeleted: false }, { email }],
        },
      }

      Usuario.find(filter, function(err, usuarios) {
        if (err) return cb(err)
        cb(null, usuarios)
      })
    })
  } catch (e) {
    cb(new Error())
  }
}
