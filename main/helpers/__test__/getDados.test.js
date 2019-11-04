import { getDados } from '../getDados'

describe('getDados', () => {
  test('Se contexto tiver data, retorna data', () => {
    const contexto = { data: {} }
    expect(getDados(contexto)).toBe(contexto.data)
  })
  test('Se contexto tiver instance, retorna instance', () => {
    const contexto = { instance: {} }
    expect(getDados(contexto)).toBe(contexto.instance)
  })
  test('Se contexto não tiver data e instance, returna null', () => {
    const contexto = {}
    expect(getDados(contexto)).toEqual(null)
  })
})
