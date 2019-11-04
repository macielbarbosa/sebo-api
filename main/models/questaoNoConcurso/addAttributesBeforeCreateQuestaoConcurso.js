export const addAttributesBeforeCreateQuestaoConcurso = contexto => {
  const { accessToken, body } = contexto.req
  const currentDate = new Date().toISOString()
  body.dataCadastro = currentDate
  body.dataUltimaAlteracao = currentDate
  body.criadoPor = accessToken.userId
  body.usuarioId = accessToken.userId
}
