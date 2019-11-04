import { processarTagsVirtuais } from './processarTagsVirtuais'

export const substituirTagsVirtuaisPorTagIds = async ({ dados, dicionarioTagsCriadas, usuarioAtual }) => {
  const { tagsVirtuais } = dados
  dados.tagsVirtuais = null
  const tagIds = await processarTagsVirtuais({
    tagsVirtuais,
    dicionarioTagsCriadas,
    usuarioAtual,
  })
  dados.tagIds = tagIds
  return tagIds
}
