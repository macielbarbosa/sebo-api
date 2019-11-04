const { notificacao401 } = require('./notificacao401')
const { notificacao200 } = require('./notificacao200')

exports.notificacao = {
  model: 'notificacao',
  tests: [...notificacao401, ...notificacao200],
}
