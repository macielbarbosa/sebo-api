export const contratoVariosCerto = validarContrato => () => {
  const dados = {
    minhaPropriedade: 11,
    outraPropriedade: 'validaCampoObrigatorio',
    maisUmaPropriedade: 'validaCampoObrigatorio',
  }
  const validacao = validarContrato(dados)
  const validacaoEsperada = { sucesso: true, erros: {} }
  expect(validacao).toEqual(validacaoEsperada)
}
