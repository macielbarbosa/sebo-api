export const contratoVariosCamposErradosVariosErros = validarContrato => () => {
  const dados = {}
  const validacao = validarContrato(dados)
  const validacaoEsperada = {
    sucesso: false,
    erros: {
      minhaPropriedade: [
        { code: 'campo_obrigatorio' },
        { code: 'nao_numero' },
        { code: 'pequeno' },
      ],
      outraPropriedade: [{ code: 'campo_obrigatorio' }],
      maisUmaPropriedade: [{ code: 'campo_obrigatorio' }],
    },
  }
  expect(validacao).toEqual(validacaoEsperada)
}
