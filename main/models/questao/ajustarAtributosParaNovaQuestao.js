import app from 'server/server'

const buscarTagsECriarUmaNova = async (id, usuarioId) => {
  const tag = await app.models.Tag.findById(id).then(res =>
    app.models.Tag.create({
      nome: res.nome,
      usuarioId,
    })
  )
  return tag.id
}

const copiarTags = async (tagIds, usuarioId) => {
  const tagIdsCopiados = []

  if (!!tagIds) {
    tagIds.forEach(id => {
      tagIdsCopiados.push(buscarTagsECriarUmaNova(id, usuarioId))
    })
    return await Promise.all(tagIdsCopiados)
  }
  return []
}

const copiarQuestoesDeBloco = async (questoes, usuarioId) => {
  const questoesCopiadas = []

  if (!!questoes) {
    questoes.forEach(questao => {
      questoesCopiadas.push(ajustarAtributosParaNovaQuestao(questao, usuarioId, true))
    })
    return await Promise.all(questoesCopiadas)
  }
  return []
}

const excluirAtributos = questao => {
  delete questao.isDeleted
  delete questao.ocultoLixeira
  delete questao.criadoPor
  delete questao.dataCadastro
  delete questao.dataUltimaAlteracao
  return questao
}

export const ajustarAtributosParaNovaQuestao = async (dados, usuarioId, isQuestaoDoBloco = false) => {
  const newData = JSON.parse(JSON.stringify(dados))
  const questao = excluirAtributos(newData)

  if (!isQuestaoDoBloco) {
    delete questao.id
    const currentDate = new Date().toISOString()
    questao.dataCadastro = currentDate
    questao.dataUltimaAlteracao = currentDate
    questao.usuarioId = usuarioId
    questao.criadoPor = usuarioId
    questao.publico = false
  }

  if (questao.tipo !== 'bloco') {
    questao.tagIds = await copiarTags(questao.tagIds, usuarioId)
  } else {
    delete questao.tagIds
    questao.bloco.questoes = await copiarQuestoesDeBloco(questao.bloco.questoes, usuarioId)
  }

  return questao
}
