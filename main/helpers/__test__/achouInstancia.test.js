import { achouInstancia } from '../achouInstancia'

const callback = (erro, achou) => achou

const callbackComSpy = jest.fn()

const instancia = {}

const erro = 'erro'

describe('achouInstancia', () => {
  it('Com erro, throw', () => {
    const achouInstanciaCb = achouInstancia(callback)
    expect(() => achouInstanciaCb(erro, instancia)).toThrow(erro)
  })
  it('Sem erro, chama callback', () => {
    achouInstancia(callbackComSpy)(null, instancia)
    expect(callbackComSpy).toHaveBeenCalledTimes(1)
  })
  it('Com instancia, chama callback com true', () => {
    expect(achouInstancia(callback)(null, instancia)).toBe(true)
  })
  it('Sem erro, chama callback com false', () => {
    expect(achouInstancia(callback)(null, null)).toBe(false)
  })
})
