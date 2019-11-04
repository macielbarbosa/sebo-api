export const concatenarValidacoes = (validacao1, validacao2) => {
  return {
    sucesso: validacao1.sucesso && validacao2.sucesso,
    erros: [...validacao1.erros, ...validacao2.erros],
  }
}
