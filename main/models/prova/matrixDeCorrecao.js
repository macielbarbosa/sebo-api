import app from 'server/server'
import { findInstanciamento } from './resumo'

export const matrixDeCorrecao = async provaId => {
  let matrixDeCorrecao = []
  const instance = await app.models.Prova.findById(provaId)

  const instanceObj = instance.toObject()
  const questInstance = instanceObj.questoes

  if (instance.dadosAplicacao !== undefined) {
    if (instance.dadosAplicacao.participantes !== undefined) {
      const N = instance.dadosAplicacao.participantes.length

      for (let i = 0; i < N; i++) {
        let participante = instance.dadosAplicacao.participantes[i]

        let provaDoAluno = {
          id: '',
          titulo: instance.titulo,
          matricula: participante.matricula,
          nome: participante.nome,
          status: undefined,
          questoes: [],
        }

        let instanciamento = await findInstanciamento(participante.id, provaId)
        provaDoAluno.status = instanciamento[0].status
        const { questoes } = instanciamento[0].prova.grupos[0]
        provaDoAluno.id = instanciamento[0].id
        provaDoAluno.questoes = await questoes.map(questao => {
          if (questao.observacao === undefined) questao.observacao = '<p></p>'
          if (questao.notaQuestao === undefined) questao.notaQuestao = 0
          if (questao.discursiva !== undefined) {
            let questaoMatriz
            questInstance.forEach(questaoI => {
              if (questaoI.id === questao.questaoMatrizId) questaoMatriz = questaoI
            })
            questao.expectativaDeResposta = questaoMatriz.discursiva.expectativaDeResposta
          }
          return questao
        })
        provaDoAluno.notasPublicadas = instanciamento[0].notasPublicadas ? instanciamento[0].notasPublicadas : false

        matrixDeCorrecao.push(provaDoAluno)
      }
    }
  }

  return [{ matrixDeCorrecao }]
}
