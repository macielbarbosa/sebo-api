import app from 'server/server'

export const rejeitarCompartilhamento = async dados => {
  try {
    const questaoRejeitada = await app.models.QuestaoCedida.destroyById(dados.id)

    return [!!questaoRejeitada]
  } catch (error) {
    new Error(error)
  } finally {
  }
}
