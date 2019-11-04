import { atributosIrrelevantes as atributosIrrelevantesProva } from 'entidades/prova/provaInstanciamento'
import { atributosIrrelevantes as atributosIrrelevantesQuestao } from 'entidades/questao/questaoInstanciamento'
import { filterProps } from 'entidades/filterProps'
import { enumTiposDadosInstanciamento } from 'entidades/enumTiposDadosInstanciamento'
import { enumSistemaDeNota } from 'entidades/prova/enumSistemaDeNota'
import { getParticipantesFromProva } from 'main/models/prova/gerarObjProvaInstanciamento'
import { enumTipoProva } from 'entidades/enumTipoProva'

const getQuestoesParaInstanciamento = ({ questoes, todasAsQuestoes, dadosDaProva }) => {
  const questoesParaInstanciamento = []
  questoes.forEach(questao => {
    const { questaoId, fixa, peso, valor } = questao
    const questaoEncontrada = todasAsQuestoes.find(questao => questao.id === questaoId)
    if (questao) {
      let questaoParaInstanciamento = filterProps({ exclude: atributosIrrelevantesQuestao })(questaoEncontrada)
      if (questaoParaInstanciamento.tipo === 'bloco') {
        questaoParaInstanciamento.bloco.questoes = questaoParaInstanciamento.bloco.questoes.map(
          (questaoNoBloco, index) => ({
            ...questaoNoBloco,
            fixa: questao.bloco[index].fixa,
            valor: questao.bloco[index].valor
              ? questao.bloco[index].valor
              : dadosDaProva.valor * (questao.bloco[index].peso / dadosDaProva.pesoTotalProva),
          })
        )
      }
      questaoParaInstanciamento.fixa = fixa
      if (valor) questaoParaInstanciamento.valor = valor
      else if (dadosDaProva.pesoTotalProva !== 0)
        questaoParaInstanciamento.valor = dadosDaProva.valor * (peso / dadosDaProva.pesoTotalProva)

      questoesParaInstanciamento.push(questaoParaInstanciamento)
    }
  })
  return questoesParaInstanciamento
}

const getGruposParaInstanciamento = ({ grupos, todasAsQuestoes, dadosDaProva }) => {
  return grupos.map(grupo => {
    return {
      ...grupo,
      questoes: getQuestoesParaInstanciamento({ questoes: grupo.questoes, todasAsQuestoes, dadosDaProva }),
    }
  })
}

export const getProvaParaInstanciamento = async ({ prova, todasAsQuestoes, isTopLevel }) => {
  const atrbutosParaInstanciamento = filterProps({ exclude: atributosIrrelevantesProva })(prova)
  let numeroInstancias = 1
  if (prova.tipoProva !== enumTipoProva.dinamica) {
    const response = await getParticipantesFromProva(prova.id)
    if (response) numeroInstancias = response.dadosAplicacao.participantes.length
  }
  let pesoTotalProva = 0
  if (prova.sistemaDeNotasDaProva === enumSistemaDeNota.valorEmProvaEPesosEmQuestoes) {
    prova.grupos.forEach(grupo => {
      grupo.questoes.forEach(questao => {
        if (questao.tipo === 'bloco') {
          questao.bloco.questoes.forEach(q => {
            pesoTotalProva = pesoTotalProva + (q.peso ? q.peso : 1)
          })
        } else pesoTotalProva = pesoTotalProva + (questao.peso ? questao.peso : 1)
      })
    })
    if (!pesoTotalProva) pesoTotalProva = 0
  }
  const provaInstanciamento = {
    ...atrbutosParaInstanciamento,
    numeroInstancias,
    grupos: getGruposParaInstanciamento({
      grupos: prova.grupos,
      todasAsQuestoes,
      dadosDaProva: { valor: prova.valor, pesoTotalProva },
    }),
  }
  if (isTopLevel) provaInstanciamento.tipo = enumTiposDadosInstanciamento.prova
  return provaInstanciamento
}
