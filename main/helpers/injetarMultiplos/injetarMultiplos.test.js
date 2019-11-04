import { injetarMultiplos } from './injetarMultiplos'

jest.mock('./callbackAoProcessarTodasInstancias', () => ({
  callbackAoProcessarTodasInstancias: jest.fn(),
}))

describe('injetarMultiplos', () => {
  it('Chama a funcao de injetar para todas as instancias', () => {
    const instancias = [1, 2, 3, 4, 5]
    const intanciaInjetada = jest.fn()
    const funcaoDeInjetar = (context, instancia, callback) => intanciaInjetada()
    const callback = jest.fn()
    injetarMultiplos(funcaoDeInjetar)({}, instancias, callback)
    expect(intanciaInjetada).toHaveBeenCalledTimes(5)
  })
})
