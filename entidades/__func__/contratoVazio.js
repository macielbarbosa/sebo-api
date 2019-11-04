export const contratoVazio = validar => () => {
  const dados = { qualquerCoisa: 'qualquerCoisa' }
  const validarVazio = validar({})
  const validacaoSemDados = validarVazio({})
  const validacaoComDados = validarVazio(dados)
  // const validacaoSemDadosStrict = validarVazio({})
  // const validacaoComDadosStrict = validarVazio(dados)
  expect(validacaoSemDados.sucesso).toEqual(true)
  expect(validacaoComDados.sucesso).toEqual(true)
}
