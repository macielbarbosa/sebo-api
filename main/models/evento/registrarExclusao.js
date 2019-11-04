import { criarEvento } from './criarEvento'

export const registrarExclusao = ({ modelo, tipoModelo }) => async context => {
  const { id } = context.args
  const { ip, accessToken } = context.req
  modelo.find({ where: { id: id }, isDeleted: true }, (err, instancia) => {
    if (err) throw err
    criarEvento({
      tipoEvento: 'exclusao',
      tipoModelo,
      instancia,
      conexao: ip,
      usuarioId: accessToken.userId,
    })
  })
}
