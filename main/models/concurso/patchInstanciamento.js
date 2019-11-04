export const patchInstanciamento = ({ novasPropriedades, statusAtual }) => async ({ versao, instancia, cadernoId }) => {
  const caderno = instancia.cadernos.find(caderno => caderno.id === cadernoId)
  if (caderno && caderno.instanciamento.versao === versao) {
    const statusAtualValido =
      !Boolean(statusAtual) || (Boolean(statusAtual) && caderno.instanciamento.status === statusAtual)
    if (statusAtualValido) {
      Object.assign(caderno.instanciamento, novasPropriedades)
      const concurso = await instancia.save()
      return { concurso, mudouStatus: true }
    }
  }
  return { concurso: instancia, mudouStatus: false }
}
