import { models } from 'server/server'
import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'
import { enumTipoQuestao } from 'entidades/enumTipoQuestao'

const verificarSeHaQuestaoParaCorrigir = ({ questoes }) =>
  questoes.some(({ notaQuestao, tipo, ...questao }) => {
    if (tipo === enumTipoQuestao.bloco) return verificarSeHaQuestaoParaCorrigir(questao)
    return notaQuestao === undefined
  })

const _countInstanciasParaCorrigir = (instancias = []) =>
  instancias.reduce((acumulado, { prova: { grupos } }) => {
    if (grupos.some(verificarSeHaQuestaoParaCorrigir)) {
      return acumulado + 1
    }
    return acumulado
  }, 0)

const _getInstanciasAplicadas = async (Instanciamento, filtro) => {
  const instanciasConcluidas = await Instanciamento.find(filtro)
  const totalDeInstanciasConcluidas = instanciasConcluidas.length
  return {
    totalDeInstanciasConcluidas,
    instanciasConcluidas,
    totalDeInstanciasParaCorrigir: _countInstanciasParaCorrigir(instanciasConcluidas),
  }
}

export const getEstatisticasInstanciaByIdDocente = async docenteId => {
  try {
    const { Instanciamento } = models
    const filtro = {
      where: {
        and: [{ status: enumStatusInstanciamento.concluida }, { isDeleted: false }],
      },
      fields: { id: true, dataUltimaAlteracao: true, prova: { grupos: true } },
      order: 'dataUltimaAlteracao DESC',
    }
    if (docenteId) filtro.where.and.push({ usuarioId: docenteId })

    const instanciasConcluidas = await _getInstanciasAplicadas(Instanciamento, filtro)

    return { ...instanciasConcluidas }
  } catch (err) {
    throw new Error(err)
  }
}
