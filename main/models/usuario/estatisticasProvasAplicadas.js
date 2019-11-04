import { models } from 'server/server'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'

export const estatisticasProvasAplicadas = cb => {
  try {
    getProvasAplicadas()
      .then(provas => {
        cb(null, provas)
      })
      .catch(err => {
        cb(new Error(err))
      })
  } catch (e) {
    cb(new Error(e))
  }
}

const getProvasAplicadas = async () => {
  const Prova = models.Prova
  const filter = {
    where: { status: enumStatusAplicacao.aplicada },
    fields: { id: true, dataUltimaAlteracao: true },
    order: 'dataUltimaAlteracao DESC',
  }

  const provas = await Prova.find(filter)
  const totalDeProvas = provas.length

  return { totalDeProvas, provas }
}
