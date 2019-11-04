import { achouInstancia } from 'main/helpers'

export const emailExiste = Usuario => (email, cb) => {
  Usuario.findOne({ where: { email } }, achouInstancia(cb))
}
