import app from 'server/server'
import { calcNotaProva } from './calcNotaProva'

export const resumo = async provaId => {
  let resumoProva = []
  const instance = await app.models.Prova.findById(provaId)
  if (instance.dadosAplicacao !== undefined) {
    if (instance.dadosAplicacao.participantes !== undefined) {
      const N = instance.dadosAplicacao.participantes.length

      for (let i = 0; i < N; i++) {
        let participante = instance.dadosAplicacao.participantes[i]
        let resumo = {
          id: '',
          matricula: participante.matricula,
          nome: participante.nome,
          titulo: instance.titulo,
          status: undefined,
          nota: 0,
        }
        let instanciamento = await findInstanciamento(participante.id, provaId)

        resumo.id = instanciamento[0].id
        resumo.status = instanciamento[0].status
        const { questoes } = instanciamento[0].prova.grupos[0]
        resumo.nota = await calcNotaProva(questoes)
        resumoProva.push(resumo)
      }
    }
  }
  return [{ resumoProva }]
}

export const findInstanciamento = (candidatoId, provaId) => {
  let filter = {
    where: {
      candidatoId: candidatoId,
      idMatriz: provaId,
    },
  }
  return app.models.Instanciamento.find(filter)
}
