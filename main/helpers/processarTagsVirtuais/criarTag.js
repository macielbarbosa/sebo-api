export const criarTag = ({
  usuarioAtual,
  tagVirtual,
  dicionarioTagsCriadas,
}) => {
  return new Promise(resolve => {
    dicionarioTagsCriadas[tagVirtual.id] = 'criando'
    const tagData = { ...tagVirtual }
    delete tagData.id
    delete tagData.isNew
    if (usuarioAtual) {
      usuarioAtual.tags.create(tagData, (err, tagCriada) => {
        if (err) console.error(err)
        dicionarioTagsCriadas[tagVirtual.id] = tagCriada.id
        resolve()
      })
    } else {
      console.error('criarTag, usuarioAtual deveria ter um valor não nulo.')
      resolve()
    }
  })
}
