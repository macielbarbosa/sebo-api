import app from 'server/server'

import { mapearRolesParaPropriedadePermissoes } from 'main/models/usuario/mapearRolesParaPropriedadePermissoes'
import { injetarRoleNoUsuario } from 'main/models/usuario/mapearRolesParaPropriedadePermissoes/injetarRoleNoUsuario'

jest.mock('server/server', () => ({
  models: {
    RoleMapping: {
      find: jest.fn(),
    },
  },
}))

jest.mock('main/models/usuario/mapearRolesParaPropriedadePermissoes/injetarRoleNoUsuario', () => ({
  injetarRoleNoUsuario: jest.fn(),
}))

describe('mapearRolesParaPropriedadePermissoes', () => {
  it('Chama find com injeter injetarRoleNoUsuario como callback', () => {
    expect(1).toBe(1)
    const usuario = {}
    const callback = jest.fn()
    mapearRolesParaPropriedadePermissoes(usuario, callback)
    expect(app.models.RoleMapping.find).toHaveBeenCalledTimes(1)
    expect(injetarRoleNoUsuario.mock.calls[0][0]).toBe(usuario)
    expect(injetarRoleNoUsuario.mock.calls[0][1]).toBe(callback)
  })
})
