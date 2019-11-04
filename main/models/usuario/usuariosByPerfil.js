import { models } from 'server/server'
import { getIdUsariosByRoleId } from './getIdUsariosByRoleId'
import { enumTipoUsuario } from './enumTipoUsuario'

const _getPermissoesDoUsuario = userRoles => {
  const permissoes = []
  userRoles.forEach(roles => {
    permissoes.push(enumTipoUsuario[roles.name])
  })

  return permissoes
}

const _montarFiltro = async ({
  value = '',
  roleId = 0,
  limit = 10,
  skip = 0,
  order = [],
  usuariosJaSelecionados = [],
}) => {
  const userIds = !!roleId ? await getIdUsariosByRoleId(roleId) : null

  const regex = new RegExp(value, 'gi')

  const filtro = {
    where: {
      and: [
        userIds ? { id: { inq: userIds } } : {},
        { isDeleted: false },
        { id: { nin: usuariosJaSelecionados } },
        {
          or: [{ email: { like: regex } }, { nome: { like: regex } }, { matricula: parseInt(value, 10) }],
        },
      ],
    },
    limit,
    skip,
    order,
    include: 'roles',
  }

  return filtro
}

const _montarFiltroParaCount = async (parametrosParaFiltro = {}) => {
  const { where } = await _montarFiltro(parametrosParaFiltro)
  return where
}

export const getUsuarios = async parametrosParaFiltro => {
  try {
    const filtro = await _montarFiltro(parametrosParaFiltro)

    const { Usuario } = models
    const users = await Usuario.find(filtro)

    for (let user of users) {
      const { roles } = user.toJSON()
      user.permissoes = _getPermissoesDoUsuario(roles)
    }
    return users
  } catch (e) {
    return new Error()
  }
}

export const getUsuariosByPerfil = async ({ whereParams, limit, skip, order }) => {
  return await getUsuarios({ ...whereParams, limit, skip, order })
}

export const countUsuariosByPerfil = async parametrosParaFiltro => {
  try {
    const filtro = await _montarFiltroParaCount(parametrosParaFiltro)

    const { Usuario } = models
    const count = await Usuario.count(filtro)
    return { count }
  } catch (e) {
    return new Error()
  }
}

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'local-test') {
  exports._montarFiltro = _montarFiltro
  exports._montarFiltroParaCount = _montarFiltroParaCount
  exports._getPermissoesDoUsuario = _getPermissoesDoUsuario
}
