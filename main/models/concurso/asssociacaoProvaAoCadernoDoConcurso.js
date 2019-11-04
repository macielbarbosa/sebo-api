import { NotFoundError } from 'main/erros'

const getCaderno = ({ concurso, cadernoId }) => {
  const caderno = concurso.cadernos.find(({ id }) => id === cadernoId)
  if (!caderno) throw new NotFoundError('Caderno não foi achado no concurso.')
  return caderno
}

const checarProva = ({ concurso, provaId }) => {
  const prova = concurso.provas.find(({ id }) => id === provaId)
  if (!prova) throw new NotFoundError('Prova não foi achada no concurso.')
}

export const asssociarProvaAoCadernoDoConcurso = async (provaId, cadernoId, concurso) => {
  const caderno = getCaderno({ concurso, cadernoId })
  checarProva({ concurso, provaId })
  if (caderno.provasIds.includes(provaId)) return [caderno, concurso.toObject(), true]
  else caderno.provasIds.push(provaId)
  await concurso.save()
  return [caderno, concurso.toObject(), false]
}

export const desasssociarProvaAoCadernoDoConcurso = async (provaId, cadernoId, concurso) => {
  const caderno = getCaderno({ concurso, cadernoId })
  checarProva({ concurso, provaId })
  const provaIndex = caderno.provasIds.findIndex(id => id === provaId)
  if (provaIndex > -1) caderno.provasIds.splice(provaIndex, 1)
  else return [caderno, concurso.toObject(), concurso.toObject(), true]
  await concurso.save()
  return [caderno, concurso.toObject(), false]
}
