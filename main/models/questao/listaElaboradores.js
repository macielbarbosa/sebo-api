import { models } from 'server/server'

export const listaElaboradores = (cb) => {
  try {
    const { Questao } = models
    const filter = { where: { isDeleted: false }, fields: { elaborador: true } }
    Questao.find(filter, function(err, questoes) {
      if (err) return cb(err)
      cb(null, uniq(questoes.filter(questao => !!questao.elaborador).map(q => q.elaborador)))
    })
  } catch (e) {
    cb(new Error())
  }
}
const uniq = arr => {
  return Array.from(new Set(arr))
}