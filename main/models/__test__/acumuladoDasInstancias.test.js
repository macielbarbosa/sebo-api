import {
  _ordenaOArray,
  _countAcumuladoDasInstancias,
  _countInstanciasDeCadaMes,
} from 'main/models/usuario/acumuladoDasInstancias'
const arrayInstanciamento = require('test-api/samples/instanciamento/arrayInstanciamento')

jest.mock('server/server', () => ({
  models: {
    Instanciamento: {
      find: jest.fn(),
    },
  },
}))

describe('Get acumulado das instancias', () => {
  const meses = [0, 1, 0, 1, 4, 3, 0, 0, 5, 0, 0, 10]

  test('Conta as intancias de cada mes', async () => {
    const resultadoEsperado = [0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0]
    const res = _countInstanciasDeCadaMes(arrayInstanciamento)

    expect(res).toEqual(resultadoEsperado)
  })

  test('Retorna o acumulado das instancias', () => {
    const DATE_TO_USE = new Date('2019-09-20T13:06:33.918Z')
    const _Date = Date
    global.Date = jest.fn(() => DATE_TO_USE)
    global.Date.UTC = _Date.UTC
    global.Date.parse = _Date.parse
    global.Date.now = _Date.now
    const acumulado = [
      { mes: 'Out', valor: 0 },
      { mes: 'Nov', valor: 0 },
      { mes: 'Dez', valor: 10 },
      { mes: 'Jan', valor: 10 },
      { mes: 'Fev', valor: 11 },
      { mes: 'Mar', valor: 11 },
      { mes: 'Abr', valor: 12 },
      { mes: 'Mai', valor: 16 },
      { mes: 'Jun', valor: 19 },
      { mes: 'Jul', valor: 19 },
      { mes: 'Ago', valor: 19 },
      { mes: 'Set', valor: 24 },
    ]
    const res = _countAcumuladoDasInstancias(meses)
    expect(res).toEqual(acumulado)
  })

  test('Ordena um array mostrando os 12 ultimos meses', () => {
    const labelsMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const mesAtual = new Date().getMonth()

    const res = _ordenaOArray(meses)

    expect(res[11].mes).toEqual(labelsMeses[mesAtual])
    expect(res[0].mes).toEqual(labelsMeses[mesAtual + 1])
  })
})
