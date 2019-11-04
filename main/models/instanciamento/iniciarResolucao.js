import { InternalError, ValidationError, ForbiddenError } from 'main/erros'
import { validarInicializacaoDaResolucao } from 'entidades/instanciamento'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'
import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'
import { models } from 'server/server'

export const iniciarResolucao = (instancia, cb) => {
  const validacao = validarInicializacaoDaResolucao(instancia)
  if (!validacao.sucesso) return cb(new ValidationError(validacao.erros))
  if (instancia.status === enumStatusInstanciamento.concluida) {
    return cb(new ForbiddenError('instancia de prova já foi concluída'))
  }
  if (!!instancia.virtual.dataIniciouResolucao) {
    return cb(null, { dataIniciouResolucao: instancia.virtual.dataIniciouResolucao })
  }
  instancia.virtual.dataIniciouResolucao = new Date().toISOString()
  const { Prova } = models

  Prova.findById(instancia.idMatriz).then(prova => {
    if (prova && prova.status !== enumStatusAplicacao.emAplicacao)
      prova.updateAttributes({ status: enumStatusAplicacao.emAplicacao })
  })
  instancia.status = enumStatusInstanciamento.emExecucao
  instancia
    .save()
    .then(() => {
      cb(null, { dataIniciouResolucao: instancia.virtual.dataIniciouResolucao })
    })
    .catch(() => {
      cb(null, new InternalError())
    })
}
