import { mapearPropriedadePermissoesParaRoles } from 'main/models/usuario/mapearPropriedadePermissoesParaRoles'
import { aplicarRoleAoUsuario } from 'main/models/usuario/mapearPropriedadePermissoesParaRoles/aplicarRoleAoUsuario'

jest.mock('main/models/usuario/mapearPropriedadePermissoesParaRoles/aplicarRoleAoUsuario', () => ({
  aplicarRoleAoUsuario: jest.fn(),
}))

jest.mock('main/models/usuario/mapearPropriedadePermissoesParaRoles/removerPermissoesDoUsuario', () => ({
  removerPermissoesDoUsuario: jest.fn(),
}))

describe('mapearPropriedadePermissoesParaRoles', () => {
  it('teste', () => {
    expect(1).toBe(1)
  })
  it('Se não tiver context.instance, não causa erro', async () => {
    const context = {}
    expect(() => mapearPropriedadePermissoesParaRoles(context)).not.toThrow()
  })
  it('Se não tiver context.hookState.permissoes, não causa erro', () => {
    const context = {
      instance: {},
      hookState: {},
    }
    expect(() => mapearPropriedadePermissoesParaRoles(context)).not.toThrow()
  })
  it('Se tiver context.instance e context.hookState.permissoes, chama aplicarRoleAoUsuario', async () => {
    const context = {
      instance: {
        id: 'id',
      },
      hookState: { permissoes: [1, 2, 3, 4] },
    }
    jest.mock('main/models/usuario/mapearPropriedadePermissoesParaRoles/aplicarRoleAoUsuario', () => ({
      aplicarRoleAoUsuario: jest.fn(),
    }))
    const aplicouRole = jest.fn()
    aplicarRoleAoUsuario.mockReturnValue(aplicouRole)
    await mapearPropriedadePermissoesParaRoles(context)
    expect(aplicarRoleAoUsuario).toHaveBeenCalledTimes(4)
    expect(aplicouRole).toHaveBeenCalledTimes(4)
  })
})
