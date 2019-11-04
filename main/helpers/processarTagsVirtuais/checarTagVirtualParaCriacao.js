import { criarTag } from './criarTag'

export const checarTagVirtualParaCriacao = ({
  dicionarioTagsCriadas,
  usuarioAtual,
  callback,
}) => tagVirtual => {
  const tagJaCriada = dicionarioTagsCriadas[tagVirtual.id]
  if (tagVirtual.isNew && !tagJaCriada) {
    criarTag({ usuarioAtual, tagVirtual, dicionarioTagsCriadas }).then(callback)
  } else callback()
}
