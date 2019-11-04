export const contratoVariosUmCampoErrado = validarContrato => () => {
  const dados = {
    minhaPropriedade: 1,
    outraPropriedade: 'x',
    maisUmaPropriedade: 'x',
  }
  const validacao = validarContrato(dados)
  const validacaoEsperada = {
    sucesso: false,
    erros: {
      minhaPropriedade: [{ code: 'pequeno' }],
    },
  }
  expect(validacao).toEqual(validacaoEsperada)
}
