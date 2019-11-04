import { callbackAoProcessarTodasInstancias } from './callbackAoProcessarTodasInstancias'

const tamanhoQuery = 2

describe('callbackAoProcessaTodasInstancias', () => {
  it('Se tiver chegado na instância final, chama o callback', () => {
    const index = tamanhoQuery - 1
    const callback = jest.fn()
    callbackAoProcessarTodasInstancias(index, tamanhoQuery, callback)()
    expect(callback).toHaveBeenCalledTimes(1)
  })
  it('Se tiver não chegado na instância final, não chama o callback e não gera erro.', () => {
    const index = tamanhoQuery - 2
    const callback = jest.fn()
    callbackAoProcessarTodasInstancias(index, tamanhoQuery, callback)()
    expect(callback).toHaveBeenCalledTimes(0)
  })
  it('Se tiver index tiver passado do final, gera erro.', () => {
    const index = tamanhoQuery
    const callback = jest.fn()
    expect(() =>
      callbackAoProcessarTodasInstancias(index, tamanhoQuery, callback)()
    ).toThrow()
    expect(callback).toHaveBeenCalledTimes(0)
  })
})
