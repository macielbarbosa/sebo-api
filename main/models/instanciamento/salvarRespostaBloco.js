import { validar } from 'entidades/validar'
import { errorCodes } from 'entidades/errorCodes'
import { ValidationError, InternalError } from 'main/erros'
import { contratoRespostaBloco, validarInstancia } from 'entidades/instanciamento'
import {
  corrigirQuestaoMultiplaEscolha,
  corrigirQuestaoVouF,
  corrigirQuestaoAssociacaoDeColunas,
} from './corrigirQuestao'

export const salvarRespostaBloco = (instancia, resposta, cb) => {
  const validacao = validar(contratoRespostaBloco)(resposta)
  if (!validacao.sucesso) return cb(new ValidationError(validacao.erros))

  const { grupoIndex, subquestaoIndex, questaoIndex, respostaCandidato, subtipo, afirmacaoIndex } = resposta
  const validacaoInstancia = validarInstancia(grupoIndex, questaoIndex, instancia, 'bloco', subquestaoIndex, subtipo)
  if (!validacaoInstancia.sucesso) return cb(new ValidationError(validacaoInstancia.erros))

  const questaoBloco = instancia.prova.grupos[grupoIndex].questoes[questaoIndex].bloco.questoes[subquestaoIndex]

  switch (subtipo) {
    case 'multiplaEscolha': {
      questaoBloco.multiplaEscolha.respostaCandidato = respostaCandidato
      questaoBloco.multiplaEscolha.dataRespostaCandidato = new Date()
      corrigirQuestaoMultiplaEscolha(questaoBloco)
      break
    }
    case 'discursiva': {
      questaoBloco.discursiva.respostaCandidato = respostaCandidato
      questaoBloco.discursiva.dataRespostaCandidato = new Date()
      break
    }
    case 'vouf': {
      questaoBloco.vouf.afirmacoes[afirmacaoIndex].respostaCandidato = respostaCandidato
      questaoBloco.vouf.afirmacoes[afirmacaoIndex].dataRespostaCandidato = new Date()
      corrigirQuestaoVouF(questaoBloco)
      break
    }
    case 'associacaoDeColunas': {
      questaoBloco.associacaoDeColunas.colunaB[afirmacaoIndex].respostaCandidato = parseInt(respostaCandidato, 16)
      questaoBloco.associacaoDeColunas.colunaB[afirmacaoIndex].dataRespostaCandidato = new Date()
      corrigirQuestaoAssociacaoDeColunas(questaoBloco)
      break
    }
    default: {
      const message = 'tipo de questao invalida'
      cb(new ValidationError([{ code: errorCodes.tipo, message }]))
    }
  }

  instancia
    .save()
    .then(res => {
      const questaoAtualizada = res.prova.grupos[grupoIndex].questoes[questaoIndex].bloco.questoes[subquestaoIndex]
      const response = {}
      switch (subtipo) {
        case 'multiplaEscolha': {
          response.respostaCandidato = questaoAtualizada.multiplaEscolha.respostaCandidato
          response.dataRespostaCandidato = questaoAtualizada.multiplaEscolha.dataRespostaCandidato
          break
        }
        case 'discursiva': {
          response.respostaCandidato = questaoAtualizada.discursiva.respostaCandidato
          response.dataRespostaCandidato = questaoAtualizada.discursiva.dataRespostaCandidato
          break
        }
        case 'vouf': {
          response.respostaCandidato = questaoAtualizada.vouf.afirmacoes[afirmacaoIndex].respostaCandidato
          response.dataRespostaCandidato = questaoAtualizada.vouf.afirmacoes[afirmacaoIndex].dataRespostaCandidato
          break
        }
        case 'associacaoDeColunas': {
          response.respostaCandidato = questaoAtualizada.associacaoDeColunas.colunaB[afirmacaoIndex].respostaCandidato
          response.dataRespostaCandidato =
            questaoAtualizada.associacaoDeColunas.colunaB[afirmacaoIndex].dataRespostaCandidato
          break
        }
        default: {
          console.warn('SUBTIPO invalido')
        }
      }
      cb(null, response)
    })
    .catch(() => {
      cb(new InternalError())
    })
}
