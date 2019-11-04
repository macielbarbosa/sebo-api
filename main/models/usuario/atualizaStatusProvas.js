import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'
import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'
import { enumTipoAplicacao } from 'entidades/enumTipoAplicacao'
import { enumTipoQuestao } from 'entidades/enumTipoQuestao'
import { models } from 'server/server'

export const atualizaStatusProvas = async contexto => {
  contexto.result.forEach(verificaPrazo)
}

const verificaPrazo = instancia => {
  const validaStatus = provaPodeMudarStatus(instancia)
  const validaDadosAplicacao = temDadosAplicacao(instancia)

  if (validaStatus === true && validaDadosAplicacao === true) {
    const dataTerminoProva = getDataTermino(instancia)
    if (provaSemPrazo(dataTerminoProva)) atualizaStatusDaProva(instancia)
  }
}

const provaSemPrazo = dataTerminoProva => {
  let time = new Date().toISOString()
  let dataTerminoProvaTz = new Date(dataTerminoProva).toISOString()
  let resultado = Date.parse(dataTerminoProvaTz) - Date.parse(time)
  return resultado <= 0 ? true : false
}

const temDadosAplicacao = instancia => {
  return instancia.hasOwnProperty('dadosAplicacao')
}

const provaPodeMudarStatus = instancia => {
  switch (instancia.status) {
    case enumStatusAplicacao.emAplicacao:
      return true
    case enumStatusAplicacao.prontaParaAplicacao:
      return true
    default:
      return false
  }
}

const getDataTermino = instancia => {
  switch (instancia.dadosAplicacao.tipoAplicacao) {
    case enumTipoAplicacao.virtual:
      return instancia.dadosAplicacao.virtual.dataTerminoProva
    case enumTipoAplicacao.papel:
      return instancia.dadosAplicacao.papel.dataTerminoProva
    default:
      return undefined
  }
}

const atualizaStatusDaProva = instancia => {
  const { Prova, Instanciamento } = models
  Prova.findById(instancia.id).then(prova => prova && prova.updateAttributes({ status: enumStatusAplicacao.aplicada }))

  Instanciamento.find({ where: { idMatriz: instancia.id, isDeleted: false } }, (err, instancias) => {
    for (let instancia of instancias) {
      if (instancia.status === enumStatusInstanciamento.emExecucao) {
        instancia.virtual.dataTerminouResolucao = new Date().toISOString()
        instancia.status = enumStatusInstanciamento.concluida
      } else if (instancia.status === enumStatusInstanciamento.naoIniciada) {
        instancia.prova.grupos.forEach(grupo => {
          atualizarNotas(grupo.questoes)
        })
      }
      instancia.save()
    }
  })
}

export const atualizarNotas = questoes => {
  for (let questao of questoes) {

    switch (questao.tipo) {
      case enumTipoQuestao.bloco: {
        atualizarNotas(questao.bloco.questoes)
        break
      }
      case enumTipoQuestao.discursiva: { break }
      case enumTipoQuestao.redacao: { break }
      case enumTipoQuestao.multiplaEscolha:
      case enumTipoQuestao.vouf:
      case enumTipoQuestao.associacaoDeColunas:
      default: {
        if (questao.notaQuestao === undefined)
          questao.notaQuestao = 0
      }
    }
  }
}