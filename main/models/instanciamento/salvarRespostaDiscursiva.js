import { validar } from 'entidades/validar'
import { ValidationError, InternalError } from 'main/erros'
import { contratoRespostaDiscursiva, validarInstancia } from 'entidades/instanciamento'

export const salvarRespostaDiscursiva = (instancia, resposta, cb) => {
  const validacao = validar(contratoRespostaDiscursiva)(resposta)
  if (!validacao.sucesso) return cb(new ValidationError(validacao.erros))

  const { grupoIndex, questaoIndex, respostaCandidato } = resposta
  const validacaoInstancia = validarInstancia(grupoIndex, questaoIndex, instancia, 'discursiva')
  if (!validacaoInstancia.sucesso) return cb(new ValidationError(validacaoInstancia.erros))

  const questao = instancia.prova.grupos[grupoIndex].questoes[questaoIndex]
  questao.discursiva.respostaCandidato = respostaCandidato
  questao.discursiva.dataRespostaCandidato = new Date()

  instancia
    .save()
    .then(res => {
      const questaoAtualizada = res.prova.grupos[grupoIndex].questoes[questaoIndex]
      const response = {
        respostaCandidato: questaoAtualizada.discursiva.respostaCandidato,
        dataRespostaCandidato: questaoAtualizada.discursiva.dataRespostaCandidato,
      }
      cb(null, response)
    })
    .catch(() => {
      cb(null, new InternalError())
    })
}
