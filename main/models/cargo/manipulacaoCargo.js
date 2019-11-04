import { models } from 'server/server'
import uid from 'uuid/v4'
import { NotFoundError } from 'main/erros'

const excluirCadernos = (cadernosIds, cadernos) => {
  cadernosIds.forEach(cadernoId => {
    const cadernoIndex = cadernos.findIndex(caderno => caderno.id === cadernoId)
    cadernos.splice(cadernoIndex, 1)
  })
}

export const getEtapas = (cargos, cargoId) => {
  const cargoIndex = cargos.findIndex(cargo => cargo.id === cargoId)
  if (cargoIndex < 0) throw new NotFoundError(`Cargo (${cargoId}) não encontrado em: ${JSON.stringify(cargos)}`)
  return cargos[cargoIndex].etapas
}

export const alterarCargo = async (cargoId, cargoAlterado, instancia) => {
  const { cargos, id } = instancia.toObject()
  const cargo = cargos.find(cargo => cargo.id === cargoId)
  const { titulo, codigo, nivel } = cargoAlterado
  cargo.titulo = titulo
  cargo.codigo = codigo
  cargo.nivel = nivel
  await models.Concurso.updateAll({ id }, { cargos })
  return [cargo]
}

export const excluirCargo = async (cargoId, instancia) => {
  const { cargos, cadernos, id } = instancia.toObject()
  const cargoIndex = cargos.findIndex(cargo => cargo.id === cargoId)
  const cadernosCargo = cargos[cargoIndex].etapas.reduce((cadernos, etapa) => cadernos.concat(etapa.cadernos), [])
  excluirCadernos(cadernosCargo, cadernos)
  cargos.splice(cargoIndex, 1)
  await models.Concurso.updateAll({ id }, { cargos, cadernos })
  return []
}

export const criarEtapa = async (etapa, cargoId, instancia) => {
  etapa.id = uid()
  etapa.cadernos = []
  const { cargos, id } = instancia.toObject()
  getEtapas(cargos, cargoId).push(etapa)
  await models.Concurso.updateAll({ id }, { cargos })
  return [etapa]
}

export const excluirEtapa = async (etapaId, cargoId, instancia) => {
  const { id, cargos, cadernos } = instancia.toObject()
  const etapas = getEtapas(cargos, cargoId)
  const etapaIndex = etapas.findIndex(etapa => etapa.id === etapaId)
  const { cadernos: cadernosEtapa } = etapas[etapaIndex]
  excluirCadernos(cadernosEtapa, cadernos)
  etapas.splice(etapaIndex, 1)
  await models.Concurso.updateAll({ id }, { cargos, cadernos })
  return []
}

export const alterarEtapa = async (etapaId, cargoId, etapaAlterada, instancia) => {
  const { cargos, id } = instancia.toObject()
  const etapas = getEtapas(cargos, cargoId)
  const etapaIndex = etapas.findIndex(etapa => etapa.id === etapaId)
  const etapa = etapas[etapaIndex]
  etapa.titulo = etapaAlterada.titulo
  await models.Concurso.updateAll({ id }, { cargos })
  return [etapa]
}
