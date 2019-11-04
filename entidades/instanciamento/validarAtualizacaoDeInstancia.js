import { errorCodes } from 'entidades/errorCodes'

export const validarAtualizacaoDeInstancia = instancia => {
  if (instancia.tipoAplicacao === 'virtual') {
    const validacaoDaInicializacaoDaResolucao = validarInicializacaoDaResolucao(instancia)
    if (!validacaoDaInicializacaoDaResolucao.sucesso) return validacaoDaInicializacaoDaResolucao

    if (!emAplicacao(instancia)) {
      const message = 'prova nao iniciada'
      return { sucesso: false, erros: [{ code: errorCodes.provaNaoIniciada, message }] }
    }

    if (resolucaoFinalizada(instancia)) {
      const message = 'resolucao finalizada'
      return { sucesso: false, erros: [{ code: errorCodes.resolucaoFinalizada, message }] }
    }

    if (!provaDentroDaJanelaDeAplicacao(instancia)) {
      const message = 'tempo esgotado'
      return { sucesso: false, erros: [{ code: errorCodes.foraDaJanelaDeAplicacao, message }] }
    }
  }

  return { sucesso: true, erros: [] }
}

export const validarInicializacaoDaResolucao = instancia => {
  if (!provaDentroDoPeriodoDeAplicacao(instancia)) {
    const message = 'prova fora do periodo de aplicacao'
    return { sucesso: false, erros: [{ code: errorCodes.foraDoPeriodoDeAplicacao, message }] }
  }

  return { sucesso: true, erros: [] }
}

export const provaDentroDoPeriodoDeAplicacao = instancia => {
  const dataInicioProva = new Date(instancia.virtual.dataInicioProva)
  const dataTerminoProva = new Date(instancia.virtual.dataTerminoProva)
  const timestampAtual = new Date()
  return timestampAtual >= dataInicioProva && timestampAtual <= dataTerminoProva
}

export const inicioDoPeriodoDeAplicacaoJaPassou = instancia => {
  const dataInicioProva = new Date(instancia.virtual.dataInicioProva)
  const timestampAtual = new Date()
  return timestampAtual >= dataInicioProva
}

const emAplicacao = instancia => {
  const dataIniciouResolucao = instancia.virtual.dataIniciouResolucao
  return dataIniciouResolucao !== undefined && dataIniciouResolucao !== ''
}

const provaDentroDaJanelaDeAplicacao = instancia => {
  const duracaoDaProva = instancia.virtual.duracaoDaProva
  const dataIniciouResolucao = new Date(instancia.virtual.dataIniciouResolucao)
  const timestampAtual = new Date()
  const dataTerminarResolucao = Object.assign(
    dataIniciouResolucao,
    dataIniciouResolucao.setMinutes(dataIniciouResolucao.getMinutes() + duracaoDaProva)
  )

  return timestampAtual <= dataTerminarResolucao
}

export const resolucaoFinalizada = instancia => {
  const dataTerminouResolucao = instancia.virtual.dataTerminouResolucao
  return dataTerminouResolucao !== undefined && dataTerminouResolucao !== ''
}
