import { montarTagsCriadasMap, criarTags } from 'main/models/tag'

const substituirTagsVirtuaisPorTagIds = ({ dados, tagsCriadasIdMap }) => {
  if (dados.bloco) {
    dados.bloco.questoes.forEach(questao => substituirTagsVirtuaisPorTagIds({ dados: questao, tagsCriadasIdMap }))
  } else if (dados.tagsVirtuais) {
    const tagIds = dados.tagsVirtuais.map(({ id, isNew }) => {
      if (isNew) return tagsCriadasIdMap[id]
      else return id
    })
    if (dados.setAttribute) dados.setAttribute('tagIds', tagIds)
    else dados.tagIds = tagIds
    if (dados.unsetAttribute) dados.unsetAttribute('tagsVirtuais')
    else delete dados.tagsVirtuais
  }
}

const getTagsParaCriar = (questao, usuarioId) => {
  const tagsParaCriar = []
  const idsTagsParaCriar = []
  const newTags = {}
  const addNewTags = tag => {
    if (tag.isNew) newTags[tag.id] = tag
  }
  if (questao.bloco) {
    questao.bloco.questoes.forEach(questao => !!questao.tagsVirtuais && questao.tagsVirtuais.forEach(addNewTags))
  } else if (questao.tagsVirtuais) {
    questao.tagsVirtuais.forEach(addNewTags)
  }
  for (let id in newTags) {
    idsTagsParaCriar.push(id)
    tagsParaCriar.push({ nome: newTags[id].nome, usuarioId })
  }
  return { idsTagsParaCriar, tagsParaCriar }
}

const processarTagsVirtuaisEmQuestaoComDados = async ({ dados, contexto }) => {
  const { accessToken } = contexto.options
  const usuarioId = (accessToken && accessToken.userId) || dados.destinatario
  const { tagsParaCriar, idsTagsParaCriar } = getTagsParaCriar(dados, usuarioId)
  const tags = await criarTags(tagsParaCriar)
  const tagsCriadasIdMap = montarTagsCriadasMap({ tags, idsTagsParaCriar })
  substituirTagsVirtuaisPorTagIds({ dados, tagsCriadasIdMap })
}

export const processarTagsVirtuaisEmQuestao = async contexto => {
  if (contexto.data) {
    await processarTagsVirtuaisEmQuestaoComDados({ dados: contexto.data, contexto })
  } else if (contexto.instance) {
    await processarTagsVirtuaisEmQuestaoComDados({ dados: contexto.instance, contexto })
  }
}
