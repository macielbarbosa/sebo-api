import app from 'server/server'
import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'

let primeiraInstanciaDessaProva = true

const criarObjetoEstatistica = () => {
  return { resumo: {}, usos: [] }
}

const criarUso = (idProva, dataProva) => {
  return {
    idProva: idProva,
    dataProva: new Date(dataProva).toISOString(),
    acertos: 0,
    erros: 0,
    somaNotasAlunos: 0,
    somaValorQuestoes: 0,
  }
}

const somarNotasDosAlunos = ({ usos }) => {
  const somaNotasAlunos = usos.reduce((prev, current) => {
    return prev + current.somaNotasAlunos
  }, 0)
  return somaNotasAlunos
}

const somarValorDasQuestoes = ({ usos }) => {
  const somaValorQuestoes = usos.reduce((prev, current) => {
    return prev + current.somaValorQuestoes
  }, 0)
  return somaValorQuestoes
}

const getUltimos10Usos = array => {
  const arrayOrdenado = array.sort(function(a, b) {
    return new Date(b.dataProva) - new Date(a.dataProva)
  })
  let arrayUltimos10 = []
  for (let i = 0; i < arrayOrdenado.length; i++) if (i < 10) arrayUltimos10.push(arrayOrdenado[i])

  return arrayUltimos10
}

const calcularUso = ({ uso, questao }) => {
  uso.somaNotasAlunos = uso.somaNotasAlunos + (questao.notaQuestao ? questao.notaQuestao : 0)
  uso.somaValorQuestoes = uso.somaValorQuestoes + questao.valor
  uso.acertos = uso.somaNotasAlunos / uso.somaValorQuestoes
  uso.erros = 1 - uso.acertos
}

const calcularResumo = ({ estatisticas }) => {
  const somaNotasAlunos = somarNotasDosAlunos({ usos: estatisticas.usos })
  const somaValorQuestoes = somarValorDasQuestoes({ usos: estatisticas.usos })
  const arrayUltimos10 = getUltimos10Usos(estatisticas.usos)
  const somaNotasAlunos10 = somarNotasDosAlunos({ usos: arrayUltimos10 })
  const somaValorQuestoes10 = somarValorDasQuestoes({ usos: arrayUltimos10 })

  estatisticas.resumo = {
    acertos: somaNotasAlunos / somaValorQuestoes,
    erros: 1 - somaNotasAlunos / somaValorQuestoes,
    numeroUsos: estatisticas.usos.length,
    somaNotasAlunos: somaNotasAlunos,
    somaValorQuestoes: somaValorQuestoes,
    acertos10: somaNotasAlunos10 / somaValorQuestoes10,
    erros10: 1 - somaNotasAlunos10 / somaValorQuestoes10,
    somaNotasAlunos10: somaNotasAlunos10,
    somaValorQuestoes10: somaValorQuestoes10,
  }
}

export const gerarEstatisticasDaQuestao = ({ questaoMatriz, questao, idProva, dataProva }) => {
  let estatisticas =
    questaoMatriz.estatisticas === undefined ? criarObjetoEstatistica(idProva, dataProva) : questaoMatriz.estatisticas

  let uso = estatisticas.usos.find(uso => uso.idProva === idProva)
  if (uso === undefined) {
    uso = criarUso(idProva, dataProva)
    estatisticas.usos.push(uso)
    primeiraInstanciaDessaProva = false
  } else if (uso !== undefined && primeiraInstanciaDessaProva) {
    uso = criarUso(idProva, dataProva)
    primeiraInstanciaDessaProva = false
  }

  calcularUso({ uso, questao })
  calcularResumo({ estatisticas })

  return estatisticas
}

export const gerarEstatisticasDasQuestoes = async ({ prova, instancias }) => {
  for (let instancia of instancias) {
    if (instancia.status !== enumStatusInstanciamento.naoIniciada) {
      const todasAsQuestoes = instancia.prova.grupos.reduce((prev, current) => [...prev, ...current.questoes], [])
      const dataProva = prova.dadosAplicacao.papel
        ? prova.dadosAplicacao.papel.dataAplicacao
        : prova.dadosAplicacao.virtual.dataInicioProva
      for (let questao of todasAsQuestoes) {
        let questaoMatriz = await app.models.Questao.findById(questao.questaoMatrizId)
        questaoMatriz.estatisticas = gerarEstatisticasDaQuestao({
          questaoMatriz,
          questao,
          idProva: prova.id,
          dataProva,
        })
        await questaoMatriz.save()
      }
    }
  }
}
