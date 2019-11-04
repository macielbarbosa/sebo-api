import { iniciarResolucao } from '../instanciamento/iniciarResolucao'
const instanciamento2 = require('test-api/samples/instanciamento/instanciamento2')

jest.mock('server/server', () => ({
  models: {
    Prova: {
      findById: jest.fn().mockReturnValue((null, { then: () => {} })),
    },
  },
}))

const dataAtual = new Date()
const dataInicioProva = new Date(dataAtual.setDate(dataAtual.getDate() - 1))
const dataTerminoProva1 = new Date(dataAtual.setDate(dataAtual.getDate() + 2))
const dataTerminoProva2 = new Date(dataAtual.setDate(dataAtual.getDate() - 1))
const instancia1 = Object.assign(
  {},
  instanciamento2,
  {
    virtual: {
      dataInicioProva,
      dataTerminoProva: dataTerminoProva1,
      duracaoDaProva: 30,
    },
  },
  {
    save: jest.fn().mockImplementation(() => Promise.resolve(instancia1)),
  }
)
const instancia2 = Object.assign(
  {},
  instanciamento2,
  {
    virtual: {
      dataInicioProva,
      dataTerminoProva: dataTerminoProva2,
      duracaoDaProva: 30,
    },
  },
  {
    save: jest.fn().mockImplementation(() => Promise.resolve(instancia2)),
  }
)

const errosSample = [{ code: 'fora_do_periodo_de_aplicacao', message: 'prova fora do periodo de aplicacao' }]

describe('Iniciar Resolucao', () => {
  test('Insere dataIniciouResolucao em instancia do aluno', async () => {
    const dataAtual = new Date().toISOString()
    iniciarResolucao(instancia1, () => {
      expect(instancia1.virtual.dataIniciouResolucao).toEqual(dataAtual)
    })
  })
  test('Falha ao iniciar instancia do aluno', async () => {
    iniciarResolucao(instancia2, error => {
      expect(error.status).toBe(422)
      expect(error.statusCode).toBe(422)
      expect(error.name).toBe('ValidationError')
      expect(error.details).toEqual(errosSample)
    })
  })
})
