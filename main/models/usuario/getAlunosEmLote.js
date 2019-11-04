import app from 'server/server'

const numberRegex = /^-{0,1}\d+$/

export const getAlunosEmLote = (matriculaOuEmail, cb) => {
  matriculaOuEmail
    .reduce(
      async (acc, item) => {
        const { alunos = [], alunosPendentes = [] } = await acc
        const { Usuario } = app.models
        const user = await Usuario.findOne({
          where: { or: [{ email: item }, { matricula: item }] },
        })
        if (user) {
          const { email, nome, matricula, id, validado } = user
          return { alunosPendentes, alunos: [...alunos, { email, nome, matricula, id, validado }] }
        } else if (numberRegex.test(item)) {
          return { alunos, alunosPendentes: [...alunosPendentes, { matricula: Number(item), email: null }] }
        } else {
          return { alunos, alunosPendentes: [...alunosPendentes, { email: item, matricula: null }] }
        }
      },
      { alunos: [], alunosPendentes: [] }
    )
    .then(({ alunos, alunosPendentes }) => cb(null, alunos, alunosPendentes))
    .catch(() => cb(new Error()))
}
