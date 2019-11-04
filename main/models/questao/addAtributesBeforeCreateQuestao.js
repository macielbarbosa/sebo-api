export const addAtributesBeforeCreateQuestao = async contexto => {
  const { accessToken, body } = contexto.req
  const currentDate = new Date().toISOString()
  body.dataCadastro = currentDate
  body.dataUltimaAlteracao = currentDate
  body.usuarioId = accessToken.userId
  body.criadoPor = accessToken.userId
  body.publico = false
}
