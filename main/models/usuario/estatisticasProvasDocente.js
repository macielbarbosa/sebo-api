import { models } from 'server/server'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'

const _countProvas = async filtro => {
  const { Prova } = models
  return await Prova.count(filtro)
}

const _countProvasEmAplicacao = async docenteId => {
  const filtro = {
    status: enumStatusAplicacao.emAplicacao,
    isDeleted: false,
  }
  if (docenteId) filtro.usuarioId = docenteId

  return await _countProvas(filtro)
}

const _countProvasComVistaHabilitada = async docenteId => {
  const filtro = {
    vistaProvaHabilitada: true,
    isDeleted: false,
  }
  if (docenteId) filtro.usuarioId = docenteId
  return await _countProvas(filtro)
}

export const getEstatisticasProvaByIdDocente = async docenteId => {
  try {
    const provasEmAplicacao = await _countProvasEmAplicacao(docenteId)
    const provasComVistaHabilitadas = await _countProvasComVistaHabilitada(docenteId)
    return { provasEmAplicacao, provasComVistaHabilitadas }
  } catch (err) {
    throw new Error(err)
  }
}
