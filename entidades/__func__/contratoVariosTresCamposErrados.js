export const contratoVariosTresCamposErrados = validarContrato => () => {
  const dados = {
    minhaPropriedade: 1,
  }
  const validacao = validarContrato(dados)
  const validacaoEsperada = {
    sucesso: false,
    erros: {
      minhaPropriedade: [{ code: 'pequeno' }],
      outraPropriedade: [{ code: 'campo_obrigatorio' }],
      maisUmaPropriedade: [{ code: 'campo_obrigatorio' }],
    },
  }
  expect(validacao).toEqual(validacaoEsperada)
}
