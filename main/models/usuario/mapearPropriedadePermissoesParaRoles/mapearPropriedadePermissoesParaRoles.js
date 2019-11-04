import { aplicarRoleAoUsuario } from './aplicarRoleAoUsuario'
import { removerPermissoesDoUsuario } from './removerPermissoesDoUsuario'

export const mapearPropriedadePermissoesParaRoles = async contexto => {
  const { permissoes } = contexto.hookState
  const deveRemoverPermissoes = Array.isArray(permissoes)
  const deveAdicionarNovasPermissoes = Array.isArray(permissoes) && contexto.instance
  if (deveRemoverPermissoes) await removerPermissoesDoUsuario(contexto.instance)
  if (deveAdicionarNovasPermissoes) {
    for (let index in permissoes) await aplicarRoleAoUsuario(contexto.instance.id)(permissoes[index])
  }
}
