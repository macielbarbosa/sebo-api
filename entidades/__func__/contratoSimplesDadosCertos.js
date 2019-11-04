export const contratoSimplesDadosCertos = validarContrato => () => {
  const dadosCertos = { minhaPropriedade: 'qualquerCoisa' }
  const validacaoDadosCertos = validarContrato(dadosCertos)
  const validacaoComSucesso = { sucesso: true, erros: {} }
  expect(validacaoDadosCertos).toEqual(validacaoComSucesso)
}
