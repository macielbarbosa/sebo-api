const { testData } = require('./testData')

const replaceIds = rota => {
  Object.keys(testData.ids).forEach(key => {
    let userId = testData.ids[key]
    let markup = `:${key}`
    if (rota.includes(markup)) {
      if (userId) rota = rota.replace(markup, userId)
      else throw new Error('O id não foi setado para a chave: ' + key)
    }
  })

  return rota
}

const appendToken = ({ rota, as }) => {
  if (as) {
    const token = testData.tokens[as]
    if (token) rota += '?access_token=' + testData.tokens[as]
    else throw new Error('O token não foi setado para o user: ' + as)
  }
  return rota
}

const appendCandidatoId = ({ rota, as }) => {
  if (as) {
    const candidatoId = testData.ids[as]
    if (candidatoId) rota += '&candidatoId=' + testData.ids[as]
  }
  return rota
}

const appendDestinatarioId = ({ rota, to }) => {
  if (to) {
    const destinatarioId = testData.ids[to]
    if (destinatarioId) rota += '&destinatarioId=' + testData.ids[to]
  }
  return rota
}

const appendFilter = ({ rota, filter }) => {
  if (filter) {
    rota += '&' + filter
  }
  return rota
}

exports.getRota = ({ rota, as, to, filter }) => {
  rota = replaceIds(rota)
  rota = appendToken({ rota, as })
  rota = appendCandidatoId({ rota, as })
  rota = appendDestinatarioId({ rota, to })
  rota = appendFilter({ rota, filter })
  return rota
}
