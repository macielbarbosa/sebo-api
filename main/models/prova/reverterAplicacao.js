import app from 'server/server'

import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'

const checarStatus = ({ prova }) => async () => {
  if (prova.status === enumStatusAplicacao.prontaParaAplicacao) {
    return
  } else {
    console.log('errinho aqui')
    const erro = new Error('Só é possível cancelar aplicação de provas não respondidas ainda')
    throw erro
  }
}

const editarProva = ({ prova }) => {
  prova.status = enumStatusAplicacao.elaboracao
}

const excluirInstancias = prova => {
  const { Instanciamento } = app.models
  return new Promise((resolve, reject) => {
    Instanciamento.deleteAll(
      { idMatriz: prova.id },
      { status: enumStatusAplicacao.prontaParaAplicacao },
      (err, obj) => {
        if (err) reject(err)
        resolve(obj)
      }
    )
  })
}

export const reverterAplicacao = ({ prova, instance, callback }) => {
  const shared = { prova }
  checarStatus(shared)()
    .then(() => {
      editarProva(shared)
      return instance.save()
    })
    .then(excluirInstancias)
    .then(() => {
      callback(null, 200, shared.prova)
    })
    .catch(e => {
      if (e.status === 401) {
        callback(e)
      } else {
        console.log(e)
        callback(new Error())
      }
    })
}
