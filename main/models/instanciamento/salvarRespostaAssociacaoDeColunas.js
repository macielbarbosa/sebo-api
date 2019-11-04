import { validar } from 'entidades/validar'
import { ValidationError, InternalError } from 'main/erros'
import { contratoRespostaAssociacaoDeColunas, validarInstancia } from 'entidades/instanciamento'
import { corrigirQuestaoAssociacaoDeColunas } from './corrigirQuestao'

export const salvarRespostaAssociacaoDeColunas = (instancia, resposta, cb) => {
  const validacao = validar(contratoRespostaAssociacaoDeColunas)(resposta)
  if (!validacao.sucesso) return cb(new ValidationError(validacao.erros))
  const { grupoIndex, questaoIndex, respostaCandidato, afirmacaoIndex } = resposta
  const validacaoInstancia = validarInstancia(grupoIndex, questaoIndex, instancia, 'associacaoDeColunas')
  if (!validacaoInstancia.sucesso) return cb(new ValidationError(validacaoInstancia.erros))

  const questao = instancia.prova.grupos[grupoIndex].questoes[questaoIndex]
  questao.associacaoDeColunas.colunaB[afirmacaoIndex].respostaCandidato = parseInt(respostaCandidato, 16)
  questao.associacaoDeColunas.colunaB[afirmacaoIndex].dataRespostaCandidato = new Date()

  corrigirQuestaoAssociacaoDeColunas(questao)

  instancia
    .save()
    .then(res => {
      const questaoAtualizada = res.prova.grupos[grupoIndex].questoes[questaoIndex]
      const response = {
        respostaCandidato: questaoAtualizada.associacaoDeColunas.colunaB[afirmacaoIndex].respostaCandidato,
        dataRespostaCandidato: questaoAtualizada.associacaoDeColunas.colunaB[afirmacaoIndex].dataRespostaCandidato,
      }
      cb(null, response)
    })
    .catch(() => {
      cb(new InternalError())
    })
}