import app from 'server/server'

export const compartilharQuestao = async (dados, destinatarioId) => {
  try {
    const questaoCedida = await app.models.QuestaoCedida.create({
      remetente: dados.usuarioId,
      destinatario: destinatarioId,
      questao: dados,
    })

    app.models.Notificacao.create({
      texto: 'Nova questão compartilhada',
      rota: {
        recurso: 'QuestaoCedida',
        operacao: 'compartilhar',
        id: questaoCedida.id,
      },
      usuarioId: destinatarioId,
    })

    return [questaoCedida]
  } catch (error) {
    new Error(error)
  }
}
