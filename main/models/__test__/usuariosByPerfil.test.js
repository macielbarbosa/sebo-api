import {
  _montarFiltro,
  _montarFiltroParaCount,
  _getPermissoesDoUsuario,
  getUsuarios,
  getUsuariosByPerfil,
  countUsuariosByPerfil,
} from 'main/models/usuario/usuariosByPerfil'

import { models } from 'server/server'

jest.mock('server/server', () => ({
  models: {
    Usuario: {
      find: jest.fn().mockReturnValue([{ toJSON: jest.fn().mockReturnValue({ id: 1, nome: 'ze', roles: [] }) }]),
      count: jest.fn().mockReturnValue(1),
    },
  },
}))

jest.mock('main/models/usuario/getIdUsariosByRoleId', () => ({
  getIdUsariosByRoleId: jest.fn().mockReturnValue([1]),
}))

const retornoFind = [{ permissoes: [], toJSON: jest.fn().mockReturnValue({ id: 1, nome: 'ze', roles: [] }) }]
const regex = new RegExp('teste', 'gi')
const resultado = {
  where: {
    and: [
      { id: { inq: [1] } },
      { isDeleted: false },
      { id: { nin: [1] } },
      {
        or: [{ email: { like: regex } }, { nome: { like: regex } }, { matricula: parseInt('teste', 10) }],
      },
    ],
  },
  limit: 1,
  skip: 1,
  order: ['de tras pra frente'],
  include: 'roles',
}
const parametrosComWhereParams = {
  whereParams: { value: 'teste', roleId: 1 },
  limit: 1,
  skip: 1,
  order: ['de tras pra frente'],
  usuariosJaSelecionados: [1],
}
const parametros = {
  value: 'teste',
  roleId: 1,
  limit: 1,
  skip: 1,
  order: ['de tras pra frente'],
  usuariosJaSelecionados: [1],
}

const userRoles = [
  {
    name: 'discente',
  },
  { name: 'admin' },
]

const resultRole = [3, 1]

describe('Busca de usuários com filtro de roles', () => {
  test('pegar permissoes', async () => {
    expect(await _getPermissoesDoUsuario(userRoles)).toEqual(resultRole)
  })

  test('retorno de filtro', async () => {
    expect(await _montarFiltro(parametros)).toEqual(resultado)
  })

  test('filtro para usar com count', async () => {
    expect(await _montarFiltroParaCount(parametros)).toEqual(resultado.where)
  })

  test('busca de usuários baseada no filtro', async () => {
    const spy = jest.spyOn(models.Usuario, 'find')
    const result = await getUsuarios(parametros)
    expect(JSON.stringify(result)).toEqual(JSON.stringify(retornoFind))
    expect(spy).toHaveBeenCalledWith(resultado)
  })

  test('chama busca de usuários fazendo spread nos parametros do where', async () => {
    const spy = jest.spyOn(models.Usuario, 'find')
    const result = await getUsuariosByPerfil(parametrosComWhereParams)
    expect(JSON.stringify(result)).toEqual(JSON.stringify(retornoFind))
    expect(spy).toHaveBeenCalledWith(resultado)
  })

  test('conta usuários de acordo com o filtro', async () => {
    const spy = jest.spyOn(models.Usuario, 'count')
    const result = await countUsuariosByPerfil(parametros)
    expect(result).toEqual({ count: 1 })
    expect(spy).toHaveBeenCalledWith(resultado.where)
  })
})
