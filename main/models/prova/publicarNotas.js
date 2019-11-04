import app from 'server/server'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'
import { InternalError } from 'main/erros/InternalError'
import { gerarEstatisticasDasQuestoes } from 'main/models/questao/gerarEstatisticasDasQuestoes'
import { gerarEstatisticas } from './gerarEstatisticas'

export const publicarNotas = async id => {
  let prova = await app.models.Prova.findById(id)
  const filter = {
    where: {
      idMatriz: id,
      isDeleted: false,
    },
  }
  let instancias = await app.models.Instanciamento.find(filter)
  if (!!prova.dadosAplicacao && prova.status === enumStatusAplicacao.aplicada) {
    const estatisticas = await gerarEstatisticas({ prova, instancias })

    prova.estatisticas = estatisticas
    prova.dadosAplicacao.notasPublicadas = true
    prova
      .save()
      .then(() => {
        gerarEstatisticasDasQuestoes({ prova, instancias })
        for (let instancia of instancias) {
          instancia.prova.estatisticas = estatisticas
          instancia.notasPublicadas = true
          instancia.save().catch(error => {
            throw new InternalError(error)
          })
        }
      })
      .catch(error => {
        throw new InternalError(error)
      })
  }
  return [prova.dadosAplicacao.notasPublicadas]
}
