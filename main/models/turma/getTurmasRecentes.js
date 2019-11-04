import { models } from 'server/server'

export const getTurmasRecentes = (docenteId = '', filtro, cb) => {
  try {
    const { Turma } = models
    const timestampAtual = new Date()
    const mes = timestampAtual.getMonth() + 1
    const ano = timestampAtual.getFullYear()
    const anoPassado = ano - 1
    const mesJunho = 6
    const periodo1 = 1
    const periodo2 = 2
    const periodo3 = 3
    const periodo4 = 4

    let filter = {}
    filter.order = ['ano DESC', 'periodo DESC', 'nome ASC']
    if (mes > mesJunho)
      filter.where = {
        and: [{ usuarioId: docenteId, isDeleted: false, ano: ano }],
      }
    else
      filter.where = {
        and: [
          { usuarioId: docenteId, isDeleted: false },
          {
            or: [
              { and: [{ ano: ano }, { or: [{ periodo: periodo1 }, { periodo: periodo3 }] }] },
              { and: [{ ano: anoPassado }, { or: [{ periodo: periodo2 }, { periodo: periodo4 }] }] },
            ],
          },
        ],
      }
    if (!!filtro) filter.where.and.push(filtro.where)
    Turma.find(filter, (err, turmas) => {
      if (err) return cb(err)
      cb(null, turmas)
    })
  } catch (e) {
    cb(new Error())
  }
}
