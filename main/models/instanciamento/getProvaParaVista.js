import { errorCodes } from 'entidades/errorCodes'
import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'

export const getProvaParaVista = async function() {
  try {
    let err
    const instancia = this
    if (instancia.status !== enumStatusInstanciamento.concluida) {
      err = new Error('instancia de prova ainda não concluída')
      err.code = errorCodes.instanciaNaoConcluida
      return Promise.reject(err)
    }
    if (!instancia.prova.vistaProvaHabilitada) {
      err = new Error('vista de prova nao habilitada para essa instância')
      err.code = errorCodes.vistaDeProvaNaoHabilitada
      return Promise.reject(err)
    }
    if (instancia.prova.grupos) {
      instancia.prova.grupos.forEach(grupo => {
        if (grupo.questoes) {
          grupo.questoes.forEach(questao => {
            removerNota(questao)
          })
        }
      })
    }
    return instancia
  } catch (e) {
    console.warn(e)
  }
}

const removerNota = questao => {
  delete questao.numeroNaMatriz
  delete questao.numeroNaInstancia
  delete questao.notaQuestao
}
