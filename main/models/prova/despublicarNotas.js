import app from 'server/server'
import { InternalError } from 'main/erros/InternalError'

export const despublicarNotas = async id => {
  let prova = await app.models.Prova.findById(id)
  const filter = {
    where: {
      idMatriz: id,
      isDeleted: false,
    },
  }
  let instancias = await app.models.Instanciamento.find(filter)
  if (!!prova.dadosAplicacao.notasPublicadas) {
    prova.dadosAplicacao.notasPublicadas = false
    prova
      .save()
      .then(() => {
        for (var i = 0; i < instancias.length; i++) {
          let instancia = instancias[i]
          instancia.notasPublicadas = false
          instancia.save().catch(error => {
            throw new InternalError(error)
          })
        }
      })
      .catch(error => {
        throw new InternalError(error)
      })
  }
  return [prova.dadosAplicacao.notasPublicadas]
}
