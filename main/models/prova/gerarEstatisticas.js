import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'
import { enumTipoQuestao } from 'entidades/enumTipoQuestao'
import { calcNotaProva } from './calcNotaProva'

function _isEmpty(obj) {
  return obj ? Object.keys(obj).length === 0 : true
}

const _incializarMultiplaEscolha = questao => {
  let marcacoes = {}
  questao.multiplaEscolha.alternativas.forEach(al => {
    marcacoes = {
      ...marcacoes,
      [al.letraNaInstancia]: {
        letra: al.letraNaInstancia,
        quantidade: 0,
      },
    }
  })
  return marcacoes
}

const _comparaPosicoes = (posA, posB) => {
  return posA.afirmacao > posB.afirmacao ? 1 : posB.afirmacao > posA.afirmacao ? -1 : 0
}

const _inicializarVouF = afirmacoes => {
  let marcacoes = []
  afirmacoes.forEach(({ posicaoNaMatriz, letra }) => {
    marcacoes.push({
      v: 0,
      f: 0,
      afirmacao: posicaoNaMatriz,
      resposta: letra,
    })
  })

  return marcacoes.sort(_comparaPosicoes)
}

const _inicializarColunaA = questao => {
  let colunaA = {}
  questao.associacaoDeColunas.colunaA.forEach(({ rotulo }) => {
    colunaA = {
      ...colunaA,
      [rotulo]: {
        rotulo,
        quantidade: 0,
      },
    }
  })
  return colunaA
}

const gerarEstatisticasPorQuestao = (graficoDaQuestao = {}, questao) => {
  const defaultObject = { questao: questao.numeroNaMatriz, tipo: questao.tipo }
  if (questao.tipo === enumTipoQuestao.multiplaEscolha) {
    let { marcacoes = {} } = graficoDaQuestao

    if (_isEmpty(graficoDaQuestao)) marcacoes = _incializarMultiplaEscolha(questao)

    if (questao.multiplaEscolha.respostaCandidato) {
      const { letraNaMatriz: respostaCandidato } = questao.multiplaEscolha.alternativas.find(
        ({ letraNaInstancia }) => letraNaInstancia === questao.multiplaEscolha.respostaCandidato
      )
      const { [respostaCandidato]: marcacao = {} } = marcacoes
      const { quantidade: quantidadaRespostas = 0 } = marcacao
      marcacoes[respostaCandidato] = { letra: respostaCandidato, quantidade: quantidadaRespostas + 1 }
    }
    return { ...defaultObject, marcacoes }
  } else if (questao.tipo === enumTipoQuestao.vouf) {
    let { marcacoes = [] } = graficoDaQuestao
    const { afirmacoes = [] } = questao.vouf

    if (_isEmpty(graficoDaQuestao)) marcacoes = _inicializarVouF(afirmacoes)

    afirmacoes.forEach(({ posicaoNaMatriz, letra, respostaCandidato }) => {
      if (respostaCandidato) {
        const { [posicaoNaMatriz]: afirmacao = {} } = marcacoes
        const { v = 0, f = 0 } = afirmacao
        const soma = respostaCandidato === 'V' ? { v: v + 1, f } : { v, f: f + 1 }
        marcacoes[posicaoNaMatriz] = { ...soma, afirmacao: posicaoNaMatriz, resposta: letra }
      }
    })
    return { ...defaultObject, marcacoes }
  } else if (questao.tipo === enumTipoQuestao.associacaoDeColunas) {
    const { colunaB = [] } = questao.associacaoDeColunas

    const { colunaB: estatisticaColunaB = {} } = graficoDaQuestao
    colunaB.forEach(({ posicaoMatriz, rotuloMatriz: rotuloResposta, respostaCandidato }) => {
      const rotulo = posicaoMatriz + 1
      let { colunaA = {} } = estatisticaColunaB[rotulo] || {}

      if (_isEmpty(estatisticaColunaB[rotulo])) colunaA = _inicializarColunaA(questao)

      if (respostaCandidato) {
        const { [respostaCandidato]: coluna = { rotulo: respostaCandidato } } = colunaA
        const { quantidade = 0 } = coluna
        colunaA[respostaCandidato] = { ...coluna, quantidade: quantidade + 1 }
      }
      estatisticaColunaB[rotulo] = {
        rotulo,
        rotuloResposta,
        colunaA,
      }
    })

    return { ...defaultObject, colunaB: estatisticaColunaB }
  } else return false
}

const formatarGraficosPorQuestao = graficosPorQuestao => {
  const arrayGraficos = Object.values(graficosPorQuestao)
  return arrayGraficos.map(grafico => {
    if (grafico.tipo === enumTipoQuestao.multiplaEscolha) {
      const { marcacoes = {}, ...rest } = grafico

      return { ...rest, marcacoes: Object.values(marcacoes) }
    } else if (grafico.tipo === enumTipoQuestao.associacaoDeColunas) {
      const { colunaB = {}, ...rest } = grafico
      return {
        ...rest,
        colunaB: Object.values(colunaB).map(({ colunaA = {}, ...restColuna }) => {
          return { ...restColuna, colunaA: Object.values(colunaA) }
        }),
      }
    } else return grafico
  })
}

export const gerarMedia = async instancias => {
  const somatorioLocal = await Promise.all(
    instancias.map(async instancia => {
      const { prova } = instancia
      const questoes = prova.grupos.reduce(
        (questoesDaProva, { questoes: questoesDoGrupo }) => [...questoesDaProva, ...questoesDoGrupo],
        []
      )
      const notaProva = await calcNotaProva(questoes)
      instancia.prova.notaProva = notaProva
      return notaProva
    })
  )
  return somatorioLocal.reduce((somatorioGlobal, nota) => somatorioGlobal + nota, 0) / instancias.length
}
export const gerarDesvioPadrao = ({ media, instancias }) =>
  Math.sqrt(
    instancias.reduce((somaDasDiferencas, { notaProva = 0 }) => somaDasDiferencas + (notaProva - media) ** 2, 0) /
      instancias.length
  )

export const gerarEstatisticas = async ({ prova = {}, instancias = {} }) => {
  const numeroParticipantes = prova.dadosAplicacao.participantes.length

  const numeroProvasRespondidas = instancias.filter(({ status }) => status === enumStatusInstanciamento.concluida)
    .length

  let media = await gerarMedia(instancias)

  const desvioPadrao = gerarDesvioPadrao({ media, instancias })

  let graficosPorQuestao = {}
  const { valor: valorProva } = prova

  const lengthHistograma = 5
  const diferencaValoresHistograma = valorProva / lengthHistograma

  const initHistograma = [...Array(lengthHistograma)].map((item, index) => {
    const lower = `${Math.round(index * diferencaValoresHistograma * 100) / 100}`.replace('.', ',')
    const higher = `${Math.round((index + 1) * diferencaValoresHistograma * 100) / 100}`.replace('.', ',')
    return { faixa: `${lower} - ${higher}`, quantidade: 0 }
  })

  const histogramaNotas = instancias.reduce((histograma = {}, { notaProva = 0 }) => {
    const indice = [Math.floor(notaProva / diferencaValoresHistograma)]
    const { quantidade = 0 } = histograma[indice] || {}
    histograma[indice] = { ...histograma[indice], quantidade: quantidade + 1 }
    return histograma
  }, initHistograma)

  const acertosQuestao = []
  instancias.forEach(instancia =>
    instancia.prova.grupos.forEach(grupo =>
      grupo.questoes.forEach(questao => {
        const { notaQuestao = 0, valor = 0, numeroNaMatriz } = questao

        const { indice = 0 } = acertosQuestao[numeroNaMatriz - 1] || {}
        acertosQuestao[numeroNaMatriz - 1] = {
          questao: numeroNaMatriz,
          indice: indice + notaQuestao / (valor * instancias.length),
        }
        const graficoDaQuestao = gerarEstatisticasPorQuestao(graficosPorQuestao[numeroNaMatriz], questao)
        if (graficoDaQuestao) graficosPorQuestao[numeroNaMatriz] = graficoDaQuestao
      })
    )
  )

  return {
    gerais: { media, desvioPadrao, numeroParticipantes, numeroProvasRespondidas },
    histogramaNotas: histogramaNotas,
    acertosQuestao: acertosQuestao.map(({ questao, indice }) => ({ questao, indice: Math.round(indice * 100) / 100 })),
    graficosPorQuestao: formatarGraficosPorQuestao(graficosPorQuestao),
  }
}
