import { finalizarResolucao } from '../instanciamento/finalizarResolucao'
const instanciamento2 = require('test-api/samples/instanciamento/instanciamento2')

jest.mock('server/server', () => ({
  models: {
    Instanciamento: {
      find: jest.fn(),
    },
    Prova: {
      findById: jest.fn(),
    },
  },
}))

const dataAtual = new Date()
const dataInicioProva = new Date(dataAtual.setDate(dataAtual.getDate() - 1))
const dataTerminoProva = new Date(dataAtual.setDate(dataAtual.getDate() + 2))
const instancia = Object.assign(
  {},
  instanciamento2,
  {
    virtual: {
      dataInicioProva,
      dataTerminoProva,
      dataIniciouResolucao: dataAtual,
      duracaoDaProva: 30,
    },
  },
  {
    save: jest.fn().mockImplementation(() => Promise.resolve(instancia)),
  }
)

describe('Finalizar Resolucao', () => {
  test('Insere dataTerminouResolucao em instancia do aluno', async () => {
    const dataAtual = new Date().toISOString()
    finalizarResolucao(instancia, () => {
      expect(instancia.virtual.dataTerminouResolucao).toEqual(dataAtual)
    })
  })
})
