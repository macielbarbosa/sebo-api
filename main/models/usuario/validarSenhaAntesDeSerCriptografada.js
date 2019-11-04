import { usuarioValidarPassword } from 'entidades/usuario'
import { ValidationError } from 'main/erros'

export const validarSenhaAntesDeSerCriptografada = async (context, user) => {
  const dados = context.req.body
  const validacao = usuarioValidarPassword(dados.password, true)
  if (!validacao.sucesso) throw new ValidationError(validacao.erros)
}
