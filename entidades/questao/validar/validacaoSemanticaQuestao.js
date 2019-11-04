import { enumSeloQuestao } from '../enumSeloQuestao'
import { errorCodes } from 'entidades/errorCodes'

import { verificarSeAtributoEstarVazio } from './verificarSeAtributoEstarVazio'
import { verificarSeExisteSentencasVazias } from './verificarSeExisteSentencasVazias'
import { verificarSeExisteSentencasRepetidas } from './verificarSeExisteSentencasRepetidas'
import { verificarSeExisteSentencasSemAssociacao } from './verificarSeExisteSentencasSemAssociacao'
import { verificarSeExisteSentencaSemValorVouFAssociado } from './verificarSeExisteSentencaSemValorVouFAssociado'
import { verificarSeExisteListaVazia } from './verificarSeExisteListaVazia'

export const validacaoSemanticaQuestao = context => {
  const { data, currentInstance, instance } = context

  if (instance) validar(instance)
  else if (currentInstance) {
    validar(data, { ...currentInstance, ...data })
  }
}

const validar = (objeto, dado) => {
  let pendencias = []
  const watchedObject = dado || objeto
  switch (watchedObject.tipo) {
    case 'multiplaEscolha': {
      pendencias = validarQuestaoMultiplaEscolha(watchedObject)
      break
    }
    case 'vouf': {
      pendencias = validarQuestaoVouF(watchedObject)
      break
    }
    case 'associacaoDeColunas': {
      pendencias = validarQuestaoAssociacaoDeColunas(watchedObject)
      break
    }
    case 'discursiva': {
      pendencias = validarQuestaoDiscursiva(watchedObject)
      break
    }
    case 'redacao': {
      pendencias = validarQuestaoRedacao(watchedObject)
      break
    }
    case 'bloco': {
      pendencias = validarQuestaoBloco(watchedObject)
      break
    }
    default:
      console.warn('Questão invalida')
  }
  if (pendencias.length > 0) objeto.selo = enumSeloQuestao.naoValidada
  else objeto.selo = enumSeloQuestao.validada
  objeto.pendencias = pendencias
}

const validarQuestao = questao => {
  switch (questao.tipo) {
    case 'multiplaEscolha':
      return validarQuestaoMultiplaEscolha(questao)
    case 'vouf':
      return validarQuestaoVouF(questao)
    case 'associacaoDeColunas':
      return validarQuestaoAssociacaoDeColunas(questao)
    case 'discursiva':
      return validarQuestaoDiscursiva(questao)
    case 'bloco':
      return validarQuestaoBloco(questao)
    default:
      return []
  }
}

const validarQuestaoMultiplaEscolha = questao => {
  const erros = [
    ...verificarSeAtributoEstarVazio('enunciado', questao.enunciado),
    ...verificarSeExisteListaVazia('alternativas', questao.multiplaEscolha ? questao.multiplaEscolha.alternativas : []),
    ...verificarSeExisteSentencasVazias(
      'alternativa',
      questao.multiplaEscolha ? questao.multiplaEscolha.alternativas : []
    ),
    ...verificarSeExisteSentencasRepetidas(
      'alternativa',
      questao.multiplaEscolha ? questao.multiplaEscolha.alternativas : []
    ),
  ]
  return erros
}

const validarQuestaoVouF = questao => {
  const erros = [
    ...verificarSeAtributoEstarVazio('enunciado', questao.enunciado),
    ...verificarSeExisteListaVazia('afirmacoes', questao.vouf.afirmacoes),
    ...verificarSeExisteSentencasVazias('afirmacao', questao.vouf.afirmacoes),
    ...verificarSeExisteSentencasRepetidas('afirmacao', questao.vouf.afirmacoes),
    ...verificarSeExisteSentencaSemValorVouFAssociado('afirmacao', questao.vouf.afirmacoes),
  ]
  return erros
}

const validarQuestaoAssociacaoDeColunas = questao => {
  const { colunaA, colunaB } = questao.associacaoDeColunas

  for (let item of colunaA) item.texto = item.conteudo
  for (let item of colunaB) item.texto = item.conteudo

  const erros = [
    ...verificarSeAtributoEstarVazio('enunciado', questao.enunciado),
    ...verificarSeExisteListaVazia('colunaA', colunaA),
    ...verificarSeExisteListaVazia('colunaB', colunaB),
    ...verificarSeExisteSentencasVazias('colunaA', colunaA),
    ...verificarSeExisteSentencasVazias('colunaB', colunaB),
    ...verificarSeExisteSentencasRepetidas('colunaA', colunaA),
    ...verificarSeExisteSentencasRepetidas('colunaB', colunaB),
    ...verificarSeExisteSentencasSemAssociacao(questao.associacaoDeColunas),
  ]

  for (let item of colunaA) delete item.texto
  for (let item of colunaB) delete item.texto
  return erros
}

const validarQuestaoDiscursiva = questao => {
  const erros = [...verificarSeAtributoEstarVazio('enunciado', questao.enunciado)]
  if (questao.discursiva.numeroDeLinhas < 1) {
    erros.push({
      field: 'numeroDeLinhas',
      code: errorCodes.espaco_insuficiente,
      message: 'Numero de linhas disponivel para resposta deve ser no minimo 1',
    })
  }
  return erros
}

const validarQuestaoRedacao = questao => {
  const erros = [...verificarSeAtributoEstarVazio('enunciado', questao.enunciado)]
  if (questao.redacao.numeroDeLinhas < 1) {
    erros.push({
      field: 'numeroDeLinhas',
      code: errorCodes.espaco_insuficiente,
      message: 'Numero de linhas disponivel para resposta deve ser no minimo 1',
    })
  }
  return erros
}

const validarQuestaoBloco = questao => {
  const erros = [
    ...verificarSeAtributoEstarVazio('enunciado', questao.enunciado),
    ...verificarSeAtributoEstarVazio('fraseInicial', questao.bloco.fraseInicial),
  ]

  let index = 1
  for (let _questao of questao.bloco.questoes) {
    const pendencias = validarQuestao(_questao)
    if (pendencias.length > 0) {
      erros.push({
        field: `questao${index}`,
        code: _questao.tipo,
        message: validarQuestao(_questao),
      })
      _questao.pendencias = pendencias
      _questao.selo = enumSeloQuestao.naoValidada
    } else {
      _questao.pendencias = []
      _questao.selo = enumSeloQuestao.validada
    }

    index++
  }

  return erros
}
