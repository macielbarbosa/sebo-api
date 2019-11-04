const findCargoEtapa = ({ caderno, concurso }) => {
  const cargoInformacoes = { posicao: null, titulo: null, id: null }
  const etapaInformacoes = { posicao: null, titulo: null, id: null }
  const cadernoInformacoes = { posicao: null, titulo: caderno.titulo, id: caderno.id }
  concurso.cargos.some((cargo, indexCargo) => {
    return cargo.etapas.some((etapa, indexEtapa) => {
      return etapa.cadernos.some((cadernoId, indexCaderno) => {
        if (cadernoId === caderno.id) {
          cargoInformacoes.id = cargo.id
          cargoInformacoes.titulo = cargo.titulo
          cargoInformacoes.posicao = indexCargo
          etapaInformacoes.id = etapa.id
          etapaInformacoes.titulo = etapa.titulo
          etapaInformacoes.posicao = indexEtapa
          cadernoInformacoes.posicao = indexCaderno
          return true
        } else {
          return false
        }
      })
    })
  })
  if (typeof cargoInformacoes.posicao !== 'number' || typeof etapaInformacoes.posicao !== 'number')
    throw Error(
      `Não foi possível achar a posição do caderno ${caderno.titulo}(${caderno.id}) no concurso ${concurso.titulo}(${
        concurso.id
      })`
    )
  return { cargo: cargoInformacoes, etapa: etapaInformacoes, caderno: cadernoInformacoes }
}

const addRespostasDeQuestao = (questao, respostasParam) => {
  let respostas = [...respostasParam]
  if (questao.multiplaEscolha) {
    respostas[questao.numeroNaInstancia - 1] = questao.multiplaEscolha.respostaCerta
  } else if (questao.bloco) {
    questao.bloco.questoes.forEach(questao => (respostas = addRespostasDeQuestao(questao, respostas)))
  } else if (questao.redacao) {
    respostas[questao.numeroNaInstancia - 1] = ''
  } else {
    throw new Error(`Tipo de questão não suportado ${questao.tipo}.`)
  }
  return respostas
}

const getRespostas = ({ caderno }) => {
  let respostas = []
  caderno.provas.forEach(prova => {
    prova.grupos.forEach(grupo => {
      grupo.questoes.forEach(questao => {
        respostas = addRespostasDeQuestao(questao, respostas)
      })
    })
  })
  return respostas
}

export const getGabarito = ({ caderno, concurso }) => {
  const { cargo, etapa, caderno: cadernoInformacoes } = findCargoEtapa({ caderno, concurso })
  const respostas = getRespostas({ caderno })
  if (respostas.some(resposta => resposta === undefined))
    throw new Error(
      `Array de respostas falho para o caderno:
      ${JSON.stringify(cadernoInformacoes, null, 2)}
      Array falho:
      ${JSON.stringify(respostas, null, 2)}`
    )
  return { cargo, etapa, caderno: cadernoInformacoes, versaoCaderno: caderno.versaoCaderno, respostas }
}
