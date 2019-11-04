import { models } from 'server/server'

export const excluirAssociacoesProva = async ({ args, instance }) => {
  const { cadernos } = instance
  const { fk: provaId } = args
  const cadernosComAProva = cadernos.filter(({ provasIds }) => provasIds.includes(provaId))
  if (cadernosComAProva.length > 0) {
    cadernosComAProva.forEach(({ provasIds }) => {
      const idIndex = provasIds.indexOf(provaId)
      provasIds.splice(idIndex, 1)
    })
    models.Concurso.updateAll({ id: instance.id }, { cadernos })
  }
}
