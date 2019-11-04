import { models } from 'server/server'

import { NotFoundError } from 'main/erros'

import { statusInstanciamentoCaderno } from 'entidades/caderno/cadernoNoConcurso/contratoCadernoInstanciamento'

import { getEtapas } from '../cargo'

export const criarCaderno = async (caderno, cargoId, etapaId, instancia) => {
  caderno.dataCadastro = new Date().toISOString()
  caderno.instanciamento = { status: statusInstanciamentoCaderno.naoInstanciado }
  const { cargos } = instancia
  const etapas = getEtapas(cargos, cargoId)
  const etapaIndex = etapas.findIndex(etapa => etapa.id === etapaId)
  if (etapaIndex < 0) throw new NotFoundError(`Etapa (${etapaId}) não encontrada em: ${JSON.stringify(etapas)}`)
  caderno = await instancia.cadernosList.create(caderno)
  etapas[etapaIndex].cadernos.push(caderno.id)
  await instancia.save()
  return [caderno]
}

export const excluirCaderno = async (cadernoId, cargoId, etapaId, instancia) => {
  const { cargos, id, cadernos } = instancia
  const etapas = getEtapas(cargos, cargoId)
  const etapaIndex = etapas.findIndex(etapa => etapa.id === etapaId)
  const { cadernos: cadernosEtapa } = etapas[etapaIndex]
  const cadernoIndexEtapa = cadernosEtapa.findIndex(idCadernoEtapa => idCadernoEtapa === cadernoId)
  cadernosEtapa.splice(cadernoIndexEtapa, 1)
  const cadernoIndex = cadernos.findIndex(caderno => caderno.id === cadernoId)
  cadernos.splice(cadernoIndex, 1)
  await models.Concurso.updateAll({ id }, { cargos, cadernos })
  return []
}

export const alterarCaderno = async (cadernoAlterado, cadernoId, instancia) => {
  const { cadernos } = instancia
  const cadernoIndex = cadernos.findIndex(caderno => caderno.id === cadernoId)
  if (cadernoIndex < 0) throw new NotFoundError(`Caderno (${cadernoId}) não encontrada em: ${JSON.stringify(cadernos)}`)
  cadernoAlterado.dataUltimaAlteracao = new Date().toISOString()
  let caderno = cadernos[cadernoIndex]
  caderno = Object.assign(caderno, cadernoAlterado)
  await instancia.save()
  return [caderno]
}
