import { validar } from 'entidades/validar'

export const validarResposta = (contratoResposta, resposta) => {
  const validacao = validar(contratoResposta)(resposta)
  if (!validacao.sucesso) return validacao
  return { sucesso: true, erros: [] }
}
