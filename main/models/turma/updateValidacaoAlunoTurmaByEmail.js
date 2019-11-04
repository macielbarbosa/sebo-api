import { models } from 'server/server'

export const updateValidacaoAlunoTurmaByEmail = email => {
  try {
    const { Turma } = models
    const filter = {
      where: {
        'alunos.email': email,
      },
    }

    Turma.find(filter, function(err, turmas) {
      if (err) return new Error(err)
      for (let turma of turmas) {
        const index = turma.alunos.findIndex(aluno => aluno.email === email)
        if (index > -1) {
          turma.alunos[index].validado = true
          turma.save()
        }
      }
    })
  } catch (e) {
    return new Error(e)
  }
}
