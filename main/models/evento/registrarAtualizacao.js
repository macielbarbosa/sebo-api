import { criarEvento } from './criarEvento'

export const registrarAtualizacao = ({ tipoModelo }) => async (
  context,
  instancia
) => {
  const { ip, accessToken } = context.req
  criarEvento({
    tipoEvento: 'atualizacao',
    tipoModelo,
    instancia,
    conexao: ip,
    usuarioId: accessToken.userId,
  })
}
