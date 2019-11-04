import app from 'server/server'

export const removeReferences = async function(context) {
  const tagId = context.where.id

  const filterProva = {
    where: {
      tagIds: { inq: [tagId] },
    },
  }
  const ProvaModel = app.models.Prova
  const provas = await ProvaModel.find(filterProva)

  await Promise.all(
    provas.map(async (prova, index) => {
      prova.updateAttributes({ tagIds: prova.tagIds.filter(id => id !== tagId) }, (err, instance) => {
        if (err) console.warn(err)
      })
    })
  )

  const filterQuestao = {
    where: {
      tagIds: { inq: [tagId] },
    },
  }
  const QuestaoModel = app.models.Questao
  const questoes = await QuestaoModel.find(filterQuestao)
  await Promise.all(
    questoes.map(async (questao, index) => {
      questao.updateAttributes({ tagIds: questao.tagIds.filter(id => id !== tagId) }, (err, instance) => {
        if (err) console.warn(err)
      })
    })
  )
}
