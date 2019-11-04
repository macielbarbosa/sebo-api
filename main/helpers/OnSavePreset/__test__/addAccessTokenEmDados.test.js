import { addAccessTokenEmDados } from '../addAccessTokenEmDados'

jest.mock('../getAccessTokenSistema', () => ({
  getAccessTokenSistema: () => ({ padrao: true }),
}))

describe('addAccessTokenEmDados', () => {
  test('Se receber accessToken, adiciona ele nos dados', () => {
    const dados = {}
    const accessToken = {}
    addAccessTokenEmDados({ dados, accessToken })
    expect(dados.accessToken).toBe(accessToken)
  })
  test('Se não receber accessToken, adiciona um accessToken padrão nos dados', () => {
    const dados = {}
    const accessToken = null
    addAccessTokenEmDados({ dados, accessToken })
    expect(dados.accessToken).toEqual({ padrao: true })
  })
})
