import { getAccessTokenSistema } from './getAccessTokenSistema'

export const addAccessTokenEmDados = ({ dados, accessToken }) => {
  if (accessToken) {
    dados.accessToken = accessToken
  } else {
    dados.accessToken = getAccessTokenSistema()
  }
}
