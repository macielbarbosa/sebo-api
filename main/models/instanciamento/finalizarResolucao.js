import { InternalError, ForbiddenError } from 'main/erros'
import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'
import { errorCodes } from 'entidades/errorCodes'
import { inicioDoPeriodoDeAplicacaoJaPassou } from 'entidades/instanciamento'
import { atualizarNotas } from 'main/models/usuario/atualizaStatusProvas'

export const finalizarResolucao = async instancia => {
  let err
  if (!!instancia.virtual.dataTerminouResolucao || instancia.status === enumStatusInstanciamento.concluida) {
    err = new ForbiddenError('instancia de prova já foi concluída')
    err.code = errorCodes.instanciaJaConcluida
    return Promise.reject(err)
  }
  if (!inicioDoPeriodoDeAplicacaoJaPassou(instancia)) {
    err = new ForbiddenError('Ainda não está no período de aplicação')
    err.code = errorCodes.foraDoPeriodoDeAplicacao
    return Promise.reject(err)
  }
  const dataTerminouResolucao = new Date().toISOString()
  instancia.prova.grupos.forEach(grupo => {
    atualizarNotas(grupo.questoes)
  })
  try {
    await instancia.updateAttributes(
      {
        status: enumStatusInstanciamento.concluida,
        virtual: { ...instancia.virtual, dataTerminouResolucao },
      },
      (err, instance) => {
        if (err) console.warn(err)
      }
    )
    return { dataTerminouResolucao }
  } catch (erros) {
    new InternalError(erros)
  }
}
