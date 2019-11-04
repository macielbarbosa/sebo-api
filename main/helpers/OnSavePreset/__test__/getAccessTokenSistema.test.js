import { getAccessTokenSistema } from '../getAccessTokenSistema'

describe('getAccessTokenSistema', () => {
  test('Retorna um accessToken padrão', () => {
    const accessToken = getAccessTokenSistema()
    const accessTokenOutro = getAccessTokenSistema()
    expect(accessToken).toEqual(accessTokenOutro)
    expect(accessToken !== accessTokenOutro).toBeTruthy()
  })
})
