import { achouInstancia } from 'main/helpers'

export const usernameExiste = Usuario => (username, cb) => {
  Usuario.findOne({ where: { username } }, achouInstancia(cb))
}
