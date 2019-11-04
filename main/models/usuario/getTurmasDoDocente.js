import { models } from 'server/server'

export const getTurmasDoDocente = (docenteId, cb) => {
  try {
    const { Turma } = models

    const anoAtual = new Date().getFullYear()
    const anoPassado = anoAtual - 1
    const filter = {
      where: {
        usuarioId: docenteId,
        isDeleted: false,
        ano: { between: [anoPassado, anoAtual] },
      },
    }

    Turma.find(filter, function(err, turmas) {
      if (err) return cb(err)
      turmas.forEach(formataDados)
      cb(null, turmas)
    })
  } catch (e) {
    cb(new Error())
  }
}

const formataDados = instancia => {
  instancia.label = `${instancia.ano}.${instancia.periodo} - ${instancia.nome} - ${instancia.numero}`
}
