import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'

export const bloquearEdicao = (ctx, modelInstance, cb) => {
  const status = ctx.instance.toObject().status
  if (status !== enumStatusAplicacao.elaboracao) {
    const erro = new Error('Apenas questões em elaboração podem ser editadas.')
    erro.status = 401
    cb(erro)
  } else {
    cb()
  }
}
