import { models } from 'server/server'
import { enumStatusInstanciamento } from 'entidades/instanciamento'

const _countInstancias = async filtro => {
  const { Instanciamento } = models
  return await Instanciamento.count(filtro)
}

const _countProvasParaFazer = async discenteId => {
  const candidato = discenteId ? { candidatoId: discenteId } : {}

  const filtro = {
    ...candidato,
    or: [{ status: enumStatusInstanciamento.naoIniciada }, { status: enumStatusInstanciamento.emExecucao }],
    'virtual.dataTerminoProva': { gte: new Date().toISOString() },
    isDeleted: false,
  }

  return await _countInstancias(filtro)
}

const _countProvasJaRespondidas = async discenteId => {
  const filtro = {
    status: enumStatusInstanciamento.concluida,
    isDeleted: false,
  }
  if (discenteId) filtro.candidatoId = discenteId

  return await _countInstancias(filtro)
}

const _countInstanciasComVistaHabilitada = async discenteId => {
  const filtro = {
    'prova.vistaProvaHabilitada': true,
    isDeleted: false,
  }
  if (discenteId) filtro.candidatoId = discenteId
  return await _countInstancias(filtro)
}

const _getUltimas10InstanciasConcluidas = async discenteId => {
  const { Instanciamento } = models

  const filtro = {
    where: { and: [{ status: enumStatusInstanciamento.concluida }, { notasPublicadas: true }] },
    fields: { id: true, dataUltimaAlteracao: true, status: true, prova: true },
    order: 'dataUltimaAlteracao DESC',
    limit: 10,
  }

  if (discenteId) filtro.where.and.push({ candidatoId: discenteId })

  return await Instanciamento.find(filtro)
}

export const getEstatisticasInstanciaByIdDiscente = async discenteId => {
  try {
    const provasParaFazer = await _countProvasParaFazer(discenteId)
    const provasJaRespondidas = await _countProvasJaRespondidas(discenteId)
    const provasComVistaHabilitada = await _countInstanciasComVistaHabilitada(discenteId)

    const ultimas10Provas = await _getUltimas10InstanciasConcluidas(discenteId)

    return { provasParaFazer, provasJaRespondidas, provasComVistaHabilitada, ultimas10Provas }
  } catch (err) {
    throw new Error(err)
  }
}

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'local-test') {
  exports._countInstancias = _countInstancias
  exports._countProvasParaFazer = _countProvasParaFazer
  exports._countProvasJaRespondidas = _countProvasJaRespondidas
  exports._countInstanciasComVistaHabilitada = _countInstanciasComVistaHabilitada
  exports._getUltimas10InstanciasConcluidas = _getUltimas10InstanciasConcluidas
}
