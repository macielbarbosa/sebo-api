import { enumTipoUsuario } from './enumTipoUsuario'
import { getUsuarios } from './usuariosByPerfil'

export const getUsuariosDocente = async (value = '', usuariosJaSelecionados = [], cb) => {
  try {
    const usuarios = await getUsuarios({ value, usuariosJaSelecionados, roleId: enumTipoUsuario.docente })
    cb(null, usuarios)
  } catch (e) {
    cb(new Error())
  }
}
