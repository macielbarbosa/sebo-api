export const contratoNull = validar => () => {
  const validacaoSemDados = validar()()
  const validacaoComDados = validar()({ qualquerCoisa: 'qualquerCoisa' })
  expect(validacaoSemDados.sucesso).toEqual(false)
  expect(validacaoComDados.sucesso).toEqual(false)
}
