import { errorCodes } from 'entidades/errorCodes'
import { validarAtualizacaoDeInstancia } from './validarAtualizacaoDeInstancia'

export const validarInstancia = (grupoIndex, questaoIndex, instancia, tipo, subquestaoIndex = '', subtipo = '') => {
  if (!instancia) {
    return { sucesso: false, erros: { code: errorCodes.dadosNullOuUndefined, message: 'instancia vazia' } }
  }
  const grupo = instancia.prova.grupos[grupoIndex]
  if (!grupo) {
    return { sucesso: false, erros: [{ code: errorCodes.foraRange, message: 'grupo inexistente' }] }
  }
  const questao = grupo.questoes[questaoIndex]
  if (!questao) {
    return { sucesso: false, erros: [{ code: errorCodes.foraRange, message: 'questao inexistente' }] }
  }
  const temQuestaoCorreta = questao.tipo === tipo
  if (!temQuestaoCorreta) {
    const message = `tipo invalido na instancia para grupo ${grupo} e questao ${questao}`
    return { sucesso: false, erros: [{ code: errorCodes.tipo, message }] }
  }

  const validacaoParaPermitirAtualizarInstancia = validarAtualizacaoDeInstancia(instancia)
  if (!validacaoParaPermitirAtualizarInstancia.sucesso) return validacaoParaPermitirAtualizarInstancia

  if (questao.tipo === 'bloco') {
    const subquestao = grupo.questoes[questaoIndex].bloco.questoes[subquestaoIndex]
    if (!subquestao) {
      return { sucesso: false, erros: [{ code: errorCodes.foraRange, message: 'subquestao de bloco inexistente' }] }
    }
    const temSubquestao = subquestao.tipo === subtipo
    if (!temSubquestao) {
      const message = `tipo invalido na instancia para grupo ${grupo}, questao bloco ${questao} e subquestao ${subquestao}`
      return { sucesso: false, erros: [{ code: errorCodes.tipo, message }] }
    }
  }

  return { sucesso: true, erros: [] }
}
