import { models } from 'server/server'

export const criarEvento = dados => {
  const { Evento, Usuario } = models
  const { usuarioId } = dados
  delete dados.usuarioId
  Usuario.findById(usuarioId, (err, { username }) => {
    if (err) throw err
    Evento.create({ ...dados, username, data: new Date() }, err => {
      if (err) throw err
    })
  })
}
