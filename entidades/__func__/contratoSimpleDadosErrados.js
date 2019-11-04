export const contratoSimpleDadosErrados = validarContrato => () => {
  const dadosErrados = { outraPropriedade: 'qualquerCoisa' }
  const validacaoDadosErrados = validarContrato(dadosErrados)
  const validacaoEsperada = {
    sucesso: false,
    erros: {
      minhaPropriedade: [{ code: 'campo_obrigatorio' }],
    },
  }
  expect(validacaoDadosErrados).toEqual(validacaoEsperada)
}
