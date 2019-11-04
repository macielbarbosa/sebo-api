import { contratoRespostaVouF, validarInstancia, validarResposta } from 'entidades/instanciamento'
import { ValidationError } from 'main/erros'
import { corrigirQuestaoVouF } from './corrigirQuestao'

export const salvarRespostaVouF = (instancia, resposta, cb) => {
  const { grupoIndex, questaoIndex, respostaCandidato, afirmacaoIndex } = resposta

  const validacaoResposta = validarResposta(contratoRespostaVouF, resposta)
  const validacaoInstancia = validarInstancia(grupoIndex, questaoIndex, instancia, 'vouf')

  if (!validacaoResposta.sucesso) return cb(new ValidationError(validacaoResposta.erros))
  if (!validacaoInstancia.sucesso) return cb(new ValidationError(validacaoInstancia.erros))

  const questao = instancia.prova.grupos[grupoIndex].questoes[questaoIndex]
  questao.vouf.afirmacoes[afirmacaoIndex].respostaCandidato = respostaCandidato
  questao.vouf.afirmacoes[afirmacaoIndex].dataRespostaCandidato = new Date()

  corrigirQuestaoVouF(questao)

  instancia
    .save()
    .then(res => {
      const questaoAtualizada = res.prova.grupos[grupoIndex].questoes[questaoIndex]
      const response = {
        respostaCandidato: questaoAtualizada.vouf.afirmacoes[afirmacaoIndex].respostaCandidato,
        dataRespostaCandidato: questaoAtualizada.vouf.afirmacoes[afirmacaoIndex].dataRespostaCandidato,
      }
      cb(null, response)
    })
    .catch(error => {
      cb(new ValidationError(error))
    })
}