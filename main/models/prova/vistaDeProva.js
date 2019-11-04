import { enumStatusAplicacao as status } from 'entidades/enumStatusAplicacao'
import { InternalError } from 'main/erros/InternalError'
import app from 'server/server'
import { errorCodes } from 'entidades/errorCodes'

export const vistaDeProva = async (id, vistaProvaHabilitada) => {
  let err
  let prova = await app.models.Prova.findById(id)
  const filter = {
    where: {
      idMatriz: id,
      isDeleted: false,
    },
  }
  let instancias = await app.models.Instanciamento.find(filter)
  if (!!!prova.dadosAplicacao || prova.dadosAplicacao === {}) {
    err = new Error('Há um erro na prova. Ela nao contém dados de aplicação.')
    err.code = errorCodes.faltaDadosAplicacao
    err.statusCode = 403
    return err
  }
  if (![status.aplicada, status.prontaParaAplicacao, status.emAplicacao].includes(prova.status)) {
    err = new Error('vista de prova nao habilitada não pode ser habilitada')
    err.code = errorCodes.vistaDeProvaNaoHabilitada
    err.statusCode = 403
    return err
  }

  prova.vistaProvaHabilitada = vistaProvaHabilitada
  prova
    .save()
    .then(() => {
      for (var i = 0; i < instancias.length; i++) {
        let instancia = instancias[i]
        instancia.prova.vistaProvaHabilitada = vistaProvaHabilitada
        instancia.save().catch(error => {
          throw new InternalError(error)
        })
      }
    })
    .catch(error => {
      throw new InternalError(error)
    })

  return [{ vistaProvaHabilitada: prova.vistaProvaHabilitada }]
}
