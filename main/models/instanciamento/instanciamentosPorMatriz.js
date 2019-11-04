import { models } from 'server/server'

export const instanciamentosPorMatriz = async (idMatriz, options) => {
  const { Instanciamento } = models
  const usuarioId = options.accessToken.userId
  const instanciamentos = await Instanciamento.find({ where: { idMatriz, usuarioId } })
  return [instanciamentos]
}

