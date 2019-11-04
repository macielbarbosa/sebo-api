import { criarEvento } from './criarEvento'

export const registrarCriacao = ({ tipoModelo }) => async (
  context,
  instancia
) => {
  const { ip, accessToken } = context.req
  criarEvento({
    tipoEvento: 'criacao',
    tipoModelo,
    instancia,
    conexao: ip,
    usuarioId: accessToken.userId,
  })
}
