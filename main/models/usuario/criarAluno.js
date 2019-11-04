import app from 'server/server'
import { sendValidatePassword, enumTipoUsuario } from 'main/models/usuario'
import { BadRequest } from 'main/erros'

const _pegaDadosDoAlunoNovo = aluno => {
  return {
    nome: aluno.nome,
    matricula: aluno.matricula,
    email: aluno.email,
    password: '12345678',
    username: aluno.nome,
    validado: false,
    permissoes: [enumTipoUsuario.discente],
  }
}

export const criarUsuarioAluno = async (aluno = {}) => {
  const { Usuario } = app.models
  const user = await Usuario.findOne({ where: { or: [{ email: aluno.email }, { nome: aluno.nome }] } })
  const usuarioNaoExiste = !user
  if (usuarioNaoExiste) {
    if (isNaN(aluno.matricula)) throw new BadRequest(`Número inválido.`, `Nada a declarar`)

    const dados = _pegaDadosDoAlunoNovo(aluno)

    try {
      const usuario = await Usuario.create(dados)
      const { redirectUrl, email } = aluno

      if (redirectUrl) sendValidatePassword(email, redirectUrl)

      return usuario
    } catch (error) {
      console.error(JSON.stringify(error.details))
      return error
    }
  } else {
    throw new Error('Usuário existente')
  }
}
