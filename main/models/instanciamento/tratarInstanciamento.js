import app from 'server/server'

import { enumStatusFila } from 'entidades/response-created-instances'
import { tratarInstanciamentoConcurso } from './tratarInstanciamentoConcurso'
import { getParticipantesFromProva } from 'main/models/prova/gerarObjProvaInstanciamento'
import { definirRespostasCorreta } from './tratarQuestoesDoInstanciamento'

const tratarInstanciamentoProva = async (dados, statusInstanciamento) => {
  if (statusInstanciamento === enumStatusFila.pronto) {
    console.log(`Tratando instanciamento da prova (${dados.idMatriz}).`)
    const { tipoAplicacao } = dados
    if (tipoAplicacao === 'virtual') {
      if (dados.provas[0].tipoProva === 'dinamica') {
        salvarInstanciamentosVirtual(dados)(dados.provas[0].dadosAplicacao.participantes)
      } else {
        await getParticipantesFromProva(dados.idMatriz).then(prova => {
          salvarInstanciamentosVirtual(dados)(prova.dadosAplicacao.participantes)
        })
      }
    } else {
      salvarInstanciamentosPapel(dados)
    }
  } else {
    console.log(`O instanciamento de prova voltando com status (${statusInstanciamento}).`)
  }
}

const getLastIdNumero = async idMatriz => {
  const { Instanciamento } = app.models
  const instancias = await Instanciamento.find({ where: { idMatriz } })
  let lastId = 0
  if (instancias)
    instancias.forEach(item => {
      if (item.prova.idNumero > lastId) lastId = item.prova.idNumero
    })
  return lastId
}

const salvarInstanciamentosPapel = async dados => {
  const { status, usuarioId, tipoAplicacao, virtual, papel, tipo, idMatriz } = dados

  let idNumero = await getLastIdNumero(idMatriz)

  const documentosProvasInstanciadas = dados.provas.map((prova, index) => {
    const { dadosAplicacao } = prova
    const participante = dadosAplicacao.participantes[index]
    const candidatoId = participante.id
    idNumero += 1
    prova.idNumero = idNumero
    prova.nomeCandidato = participante.nome
    prova.matricula = participante.matricula

    definirRespostasCorreta(prova)

    return { status, usuarioId, candidatoId, tipoAplicacao, virtual, papel, tipo, idMatriz, prova }
  })

  await app.models.Instanciamento.create(documentosProvasInstanciadas)
  console.log(`Prova (${dados.idMatriz}) instanciada com sucesso.`)
}

const salvarInstanciamentosVirtual = dados => async participantes => {
  const { status, usuarioId, tipoAplicacao, virtual, papel, tipo, idMatriz } = dados

  const documentosProvasInstanciadas = dados.provas.map((prova, index) => {
    const candidatoId = participantes[index].id
    prova.nomeCandidato = participantes[index].nome
    prova.matricula = participantes[index].matricula
    definirRespostasCorreta(prova)
    return { status, usuarioId, candidatoId, tipoAplicacao, virtual, papel, tipo, idMatriz, prova }
  })

  await app.models.Instanciamento.create(documentosProvasInstanciadas)
  console.log(`Prova (${dados.idMatriz}) instanciada com sucesso.`)
}

export const tratarInstanciamento = async mensagem => {
  console.log(`Tratando mensagem de instanciamento.`)
  const { dados, statusInstanciamento, operacao } = mensagem
  if (dados.tipo === 'cadernoConcurso') await tratarInstanciamentoConcurso(dados, statusInstanciamento, operacao)
  else if (dados.tipo === 'prova') await tratarInstanciamentoProva(dados, statusInstanciamento)
  else console.log(`Tipo de dados não suportado em tratarInstaciamento: ${dados.tipo}`)
}
