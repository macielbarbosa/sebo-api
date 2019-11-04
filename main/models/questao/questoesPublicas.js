import { models } from 'server/server'

export const getQuestoesPublicas = (filtro = {}, cb) => {
  try {
    const { Questao } = models
    if (filtro.where) {
      filtro.where.isDeleted = false
      filtro.where.publico = true
    } else {
      filtro.where = { isDeleted: false, publico: true }
    }
    Questao.find(filtro, function(err, questoes) {
      if (err) return cb(err)
      cb(null, questoes)
    })
  } catch (e) {
    cb(new Error())
  }
}

export const countQuestoesPublicas = cb => {
  try {
    const { Questao } = models
    const filter = { isDeleted: false, publico: true }
    Questao.count(filter, function(err, result) {
      if (err) return cb(err)
      cb(null, result)
    })
  } catch (e) {
    cb(new Error())
  }
}
