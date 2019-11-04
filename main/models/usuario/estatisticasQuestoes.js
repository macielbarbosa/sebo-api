import { models } from 'server/server'
import { enumTipoQuestao } from 'entidades/enumTipoQuestao'
import { enumDificuldade } from 'entidades/questao'

const _getQuantidadeQuestoes = async (Questao, filtro) => {
  return { totalDeQuestoes: await Questao.count(filtro) }
}

const _getQuantidadeQuestoesValidadas = async (Questao, filtro) => {
  return { questoesValidadas: await Questao.count({ ...filtro, selo: 'Validada' }) }
}

const _getQuestaoPorTipo = async (Questao, filtro) => {
  const estatisticas = {}

  for (let tipo in enumTipoQuestao) {
    estatisticas[`${tipo}`] = await Questao.count({ ...filtro, tipo })
  }
  return { ...estatisticas }
}

const _getQuestaoPorDificuldade = async (Questao, filtro) => {
  const estatisticas = {}
  for (let dificuldade in enumDificuldade) {
    estatisticas[`${dificuldade}`] = await Questao.count({ ...filtro, dificuldade: enumDificuldade[`${dificuldade}`] })
  }

  return { ...estatisticas }
}

export const getEstatisticasQuestoesByIdDocente = async docenteId => {
  try {
    const Questao = models.Questao
    const filtro = {
      isDeleted: false,
    }
    if (docenteId) filtro.usuarioId = docenteId

    const totalDeQuestoes = await _getQuantidadeQuestoes(Questao, filtro)
    const questoesValidadas = await _getQuantidadeQuestoesValidadas(Questao, filtro)
    const questoesPorTipo = await _getQuestaoPorTipo(Questao, filtro)
    const questoesPorDificuldade = await _getQuestaoPorDificuldade(Questao, filtro)

    return { ...totalDeQuestoes, ...questoesValidadas, ...questoesPorTipo, ...questoesPorDificuldade }
  } catch (err) {
    throw new Error(err)
  }
}

export const getEstatisticasQuestoes = async cb => {
  return await getEstatisticasQuestoesByIdDocente()
}
