const contratoSimples = {
  minhaPropriedade: {
    validar: valor => {
      let sucesso = true
      const erros = []
      if (!valor) {
        sucesso = false
        erros.push({ code: 'campo_obrigatorio' })
      }
      return { sucesso, erros }
    },
  },
}

export const validarContratoSimples = validar => validar(contratoSimples)
