import { OnSavePreset } from '../OnSavePreset'
import { beforeCreatePreset } from '../beforeCreatePreset'
import { beforeUpdatePreset } from '../beforeUpdatePreset'

jest.mock('../beforeCreatePreset', () => ({
  beforeCreatePreset: jest.fn(),
}))

jest.mock('../beforeUpdatePreset', () => ({
  beforeUpdatePreset: jest.fn(),
}))

const entidade = {}

describe('OnSavePreset', () => {
  test('Se contexto tiver data, chama beforeUpdatePreset', () => {
    const contexto = { data: {}, currentInstance: {} }
    OnSavePreset(entidade)(contexto, jest.fn())
    expect(beforeUpdatePreset).toHaveBeenCalledTimes(1)
  })
  test('Se contexto tiver instance, chama beforeCreatePreset', () => {
    const contexto = { instance: {} }
    OnSavePreset(entidade)(contexto, jest.fn())
    expect(beforeCreatePreset).toHaveBeenCalledTimes(1)
  })
  test('Se contexto não tiver instance e data, não chama nada', () => {
    const contexto = {}
    OnSavePreset(entidade)(contexto, jest.fn())
    expect(beforeUpdatePreset).toHaveBeenCalledTimes(1)
    expect(beforeUpdatePreset).toHaveBeenCalledTimes(1)
  })
})
