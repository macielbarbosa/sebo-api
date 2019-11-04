// Require the dev-dependencies
const { getRota } = require('./getRota')
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('server/server')
chai.should()
chai.use(chaiHttp)

const callWithData = verb => ({ rota, sample, status, func, as, to, filter }) => done => {
  if (typeof sample === 'function') sample = sample()
  chai
    .request(server)
    [verb](getRota({ rota, as, to, filter }))
    .send(sample)
    .end((err, res) => {
      const falhaDeValidacaoNaoEsperada = status !== 422 && res.status === 422
      const erroNaoEsperado = status === 200 && res.body.error
      if (falhaDeValidacaoNaoEsperada || erroNaoEsperado) {
        console.log(JSON.stringify(res.body.error.details))
      }
      res.should.have.status(status)
      if (func) func(err, res, done)
      else done()
    })
}

const calls = {
  post: callWithData('post'),
  put: callWithData('put'),
  patch: callWithData('patch'),
  get: callWithData('get'),
  delete: callWithData('delete'),
}

exports.apiTest = ({ verb, rota, sample, status, func, as, to, filter }) => {
  const call = calls[verb]
  if (!call) throw new Error('Verbo não implementado ainda ou inválido: ' + verb)
  return call({ rota, sample, status, func, as, to, filter })
}
