import { salvarRespostaMultiplaEscolha } from './salvarRespostaMultiplaEscolha'
import { salvarRespostaAssociacaoDeColunas } from './salvarRespostaAssociacaoDeColunas'
import { salvarRespostaVouF } from './salvarRespostaVouF'
import { salvarRespostaDiscursiva } from './salvarRespostaDiscursiva'
import { salvarRespostaBloco } from './salvarRespostaBloco'
import { validar } from 'entidades/validar'
import { ValidationError } from 'main/erros'
import { errorCodes } from 'entidades/errorCodes'
import { contratoResposta, validarAtualizacaoDeInstancia } from 'entidades/instanciamento'

export const salvarRespostaDiscente = (instancia, resposta, cb) => {
  const validacaoParaPermitirAtualizarInstancia = validarAtualizacaoDeInstancia(instancia)
  if (!validacaoParaPermitirAtualizarInstancia.sucesso)
    return cb(new ValidationError(validacaoParaPermitirAtualizarInstancia.erros))

  let validacao = validar(contratoResposta)(resposta)

  if (validacao.sucesso && validacaoParaPermitirAtualizarInstancia.sucesso) {
    switch (resposta.tipo) {
      case 'multiplaEscolha': {
        salvarRespostaMultiplaEscolha(instancia, resposta, cb)
        break
      }
      case 'bloco': {
        salvarRespostaBloco(instancia, resposta, cb)
        break
      }
      case 'discursiva': {
        salvarRespostaDiscursiva(instancia, resposta, cb)
        break
      }
      case 'vouf': {
        salvarRespostaVouF(instancia, resposta, cb)
        break
      }
      case 'associacaoDeColunas': {
        salvarRespostaAssociacaoDeColunas(instancia, resposta, cb)
        break
      }
      default: {
        const message = 'tipo de questao invalida'
        cb(new ValidationError([{ code: errorCodes.tipo, message }]))
      }
    }
  } else {
    cb(new ValidationError(validacao.erros))
  }
}
