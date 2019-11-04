import { models } from 'server/server'

import { reverterAplicacao } from './reverterAplicacao'

export const reverterAplicacaoNormal = (provaId, callback) => {
  const { Prova } = models
  Prova.findById(provaId)
    .then(prova => {
      reverterAplicacao({ prova, instance: prova, callback })
    })
    .catch(e => {
      if (e.status === 401) {
        callback(e)
      } else {
        callback(new Error())
      }
    })
}
