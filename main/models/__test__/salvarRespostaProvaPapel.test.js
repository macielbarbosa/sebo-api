import { salvarRespostas } from '../prova/salvarRespostas'

jest.mock('server/server')
const respostaProvaPapel = require('test-api/samples/resposta/sampleRespostaProvaPapel')

describe('Prova Papel', async () => {
  test('Salvar resposta da prova em papel', () => {
    const prova = {
      id: '07f8af35-a194-45f6-987b-fe3080aa5bce',
    }

    salvarRespostas(prova, respostaProvaPapel, (err, info) => {
      expect(err).toBeUndefined()
      expect(info).not.toBeUndefined()
    })
  })
})
