const { apiTest } = require('./apiTest')
const { testData } = require('./testData')

const { tokens, ids } = testData

exports.setLoginData = (username, password = '12345678') => {
  it(
    `${username}, logar e setar em testData`,
    apiTest({
      verb: 'post',
      rota: '/api/usuarios/login/',
      sample: { username, password },
      status: 200,
      func: (err, res, done) => {
        if (res.status === 200) {
          const { id, userId } = res.body
          tokens[username] = id
          ids[username] = userId
        }
        done()
      },
    })
  )
}
