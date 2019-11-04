export const contratoSimplesSemNenhumDado = validarContrato => () => {
  const validacaoSemDados = validarContrato()
  const validacaoEsperada = {
    sucesso: false,
    erros: {
      dados: [{ code: 'dados_vazios' }],
    },
  }
  expect(validacaoSemDados).toEqual(validacaoEsperada)
}
