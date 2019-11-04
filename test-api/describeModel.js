const { apiTest } = require('./apiTest')

exports.describeModel = ({ model, tests }) => {
  describe(model, () => {
    tests.forEach(test => {
      let { name, verb, as, rota, sample, status, func, to, filter } = test
      it(name, apiTest({ verb, as, rota, sample, status, func, to, filter }))
    })
  })
}
