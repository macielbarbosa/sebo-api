import { ValidationError } from 'main/erros'
import { contratoRespostaMultiplaEscolha, validarInstancia, validarResposta } from 'entidades/instanciamento'
import { corrigirQuestaoMultiplaEscolha } from './corrigirQuestao'

export const salvarRespostaMultiplaEscolha = (instancia, resposta, cb) => {
  const { grupoIndex, questaoIndex, respostaCandidato } = resposta

  const validacaoResposta = validarResposta(contratoRespostaMultiplaEscolha, resposta)
  const validacaoInstancia = validarInstancia(grupoIndex, questaoIndex, instancia, 'multiplaEscolha')

  if (!validacaoResposta.sucesso) return cb(new ValidationError(validacaoResposta.erros))
  if (!validacaoInstancia.sucesso) return cb(new ValidationError(validacaoInstancia.erros))

  const questao = instancia.prova.grupos[grupoIndex].questoes[questaoIndex]
  questao.multiplaEscolha.respostaCandidato = respostaCandidato
  questao.multiplaEscolha.dataRespostaCandidato = new Date()

  corrigirQuestaoMultiplaEscolha(questao)

  instancia
    .save()
    .then(res => {
      const questaoAtualizada = res.prova.grupos[grupoIndex].questoes[questaoIndex]
      const response = {
        respostaCandidato: questaoAtualizada.multiplaEscolha.respostaCandidato,
        dataRespostaCandidato: questaoAtualizada.multiplaEscolha.dataRespostaCandidato,
      }
      cb(null, response)
    })
    .catch(error => {
      cb(new ValidationError(error))
    })
}
