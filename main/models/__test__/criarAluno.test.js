import { criarUsuarioAluno } from 'main/models/usuario/criarAluno'
import { sendValidatePassword } from 'main/models/usuario/password'
import { models } from 'server/server'

jest.mock('main/erros', () => ({
  BadRequest: jest.fn(),
}))

jest.mock('server/server', () => ({
  models: {
    Usuario: {
      findOne: jest.fn().mockReturnValue(null),
      create: jest.fn().mockReturnValue({ id: 1 }),
    },
  },
}))

jest.mock('main/models/usuario/password')

describe('Envia e-mail com o template correto ', () => {
  test('cria um aluno discente', async () => {
    const aluno = {
      email: 'a@a.b',
      nome: 'a',
      redirectUrl: 'http',
      matricula: '1',
    }

    const dados = {
      nome: aluno.nome,
      matricula: aluno.matricula,
      email: aluno.email,
      password: '12345678',
      username: aluno.nome,
      validado: false,
      permissoes: [3],
    }

    const spy = jest.spyOn(models.Usuario, 'findOne')
    const spy2 = jest.spyOn(models.Usuario, 'create')

    const result = await criarUsuarioAluno(aluno)

    expect(spy).toHaveBeenCalledWith({ where: { or: [{ email: aluno.email }, { nome: aluno.nome }] } })
    expect(spy2).toHaveBeenCalledWith(dados)
    expect(sendValidatePassword).toHaveBeenCalledWith(aluno.email, aluno.redirectUrl)

    expect(result).toEqual({ id: 1 })
  })
})
