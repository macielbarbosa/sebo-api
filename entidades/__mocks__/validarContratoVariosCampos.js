const validaCampoObrigatorio = valor => {
  let sucesso = true
  const erros = []
  if (!valor) {
    sucesso = false
    erros.push({ code: 'campo_obrigatorio' })
  }
  return { sucesso, erros }
}

const contrato = {
  minhaPropriedade: {
    validar: valor => {
      let sucesso = true
      const erros = []
      if (!valor) {
        sucesso = false
        erros.push({ code: 'campo_obrigatorio' })
      }
      if (typeof valor !== 'number') {
        sucesso = false
        erros.push({ code: 'nao_numero' })
      }
      if (typeof valor !== 'number' || valor < 10) {
        sucesso = false
        erros.push({ code: 'pequeno' })
      }
      return { sucesso, erros }
    },
  },
  outraPropriedade: {
    validar: validaCampoObrigatorio,
  },
  maisUmaPropriedade: {
    validar: validaCampoObrigatorio,
  },
}

export const validarContratoVariosCampos = validar => validar(contrato)
