export const provaAutoCreate = {
  dataCadastro: () => new Date(),
  dataUltimaAlteracao: () => new Date(),
  criadoPor: data => {
    if (data.accessToken) return data.accessToken.userId
  },
}
