import { validar } from '../validar'

const contrato1 = {
  '*': { type: 'string' },
}

const contrato2 = {
  a: { type: 'number', required: true },
  '*': { type: 'string' },
}

describe('validar: campos genéricos', () => {
  it('Aceita campos genéricos', () => {
    let validation = validar(contrato1)({ a: 'a', b: 'b', c: 'c' })
    expect(validation.sucesso).toBe(true)
    validation = validar(contrato1)({ a: 1, b: 'b', c: 'c' })
    expect(validation.sucesso).toBe(false)
  })
  it('Aceita campos genéricos e campos específicos ao mesmo tempo.', () => {
    let validation = validar(contrato2)({ a: 2, b: 'b', c: 'c' })
    expect(validation.sucesso).toBe(true)
    validation = validar(contrato2)({ a: 'a', b: 'b', c: 'c' })
    expect(validation.sucesso).toBe(false)
  })
})
