import { salvarRespostaDiscente } from '../instanciamento/salvarRespostaDiscente'
const instanciamento2 = require('test-api/samples/instanciamento/instanciamento2')
const sampleRespostaMultiplaEscolha = require('test-api/samples/resposta/sampleRespostaMultiplaEscolha')
const sampleRespostaVouF = require('test-api/samples/resposta/sampleRespostaVouF')
const sampleRespostaDiscursiva = require('test-api/samples/resposta/sampleRespostaDiscursiva')

const hoje = new Date()
const amanha = new Date().setDate(hoje.getDate() + 1)

const instancia = Object.assign(
  {},
  instanciamento2,
  {
    virtual: {
      dataInicioProva: hoje,
      dataTerminoProva: amanha,
      duracaoDaProva: 30,
      dataIniciouResolucao: new Date().toISOString(),
    },
  },
  {
    save: jest.fn().mockImplementation(() => Promise.resolve(instancia)),
  }
)

describe('Prova Virtual', () => {
  test('Salvar resposta de questão multipla escolha', async () => {
    salvarRespostaDiscente(instancia, sampleRespostaMultiplaEscolha, (err, info) => {
      expect(info).not.toBeUndefined()
      expect(err).toBeUndefined()
    })
  })

  test('Salvar resposta de questão vouf', async () => {
    salvarRespostaDiscente(instancia, sampleRespostaVouF, (err, info) => {
      expect(info).not.toBeUndefined()
      expect(err).toBeUndefined()
    })
  })

  test('Salvar resposta de questao discursiva', async () => {
    salvarRespostaDiscente(instancia, sampleRespostaDiscursiva, (err, info) => {
      expect(info).not.toBeUndefined()
      expect(err).toBeUndefined()
    })
  })

  test('Salvar resposta de questao invalida', async () => {
    salvarRespostaDiscente(instancia, { ...sampleRespostaDiscursiva, ...{ tipo: 'invalido' } }, (err, info) => {
      expect(err).not.toBeNull()
      expect(err.details.tipo[0].message).toContain('Tipo de objeto inválido')
    })
  })
})
