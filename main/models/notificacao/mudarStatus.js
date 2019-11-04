import app from 'server/server'

export const mudarStatus = status => async dados => {
  const notificacao = await app.models.Notificacao.findById(dados.id)
  notificacao.status = status
  await notificacao.save()
  return [notificacao]
}
