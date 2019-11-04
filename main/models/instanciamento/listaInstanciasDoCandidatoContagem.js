import { models } from 'server/server'

export const listaInstanciasDoCandidatoContagem = (candidatoId, cb) => {
  try {
    const { Instanciamento } = models
    const where = {
      candidatoId: candidatoId,
      tipo: 'prova',
      isDeleted: false,
    }
    Instanciamento.count(where, function(err, count) {
      if (err) return cb(err)
      cb(null, count)
    })
  } catch (e) {
    cb(new Error())
  }
}
