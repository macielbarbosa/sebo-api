import { errorCodes } from 'entidades/errorCodes'
import { ForbiddenError } from 'main/erros'
import { provaDentroDoPeriodoDeAplicacao } from 'entidades/instanciamento'
import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'

export const obterInstanciaSemGabarito = async instancia => {
  let err
  if (!!instancia.virtual.dataTerminouResolucao || instancia.status === enumStatusInstanciamento.concluida) {
    err = new ForbiddenError('instancia de prova já foi concluída')
    err.code = errorCodes.instanciaJaConcluida
    return Promise.reject(err)
  }
  if (!provaDentroDoPeriodoDeAplicacao(instancia)) {
    err = new ForbiddenError('Não está no período de aplicação')
    err.code = errorCodes.foraDoPeriodoDeAplicacao
    return Promise.reject(err)
  }
  if (instancia.status === enumStatusInstanciamento.naoIniciada || !!!instancia.virtual.dataIniciouResolucao) {
    await instancia.updateAttributes(
      {
        status: enumStatusInstanciamento.emExecucao,
        virtual: { ...instancia.virtual, dataIniciouResolucao: new Date().toISOString() },
      },
      (err, instance) => {
        if (err) console.warn(err)
      }
    )
  }

  let grupos = instancia.prova.grupos

  grupos.forEach(grupo => {
    let questoes = grupo.questoes
    questoes.map(questao => removerGabarito(questao))
  })
  return instancia
}

const removerGabarito = questao => {
  switch (questao.tipo) {
    case 'multiplaEscolha': {
      removerGabaritoQuestaoMultiplaEscolha(questao)
      break
    }
    case 'vouf': {
      removerGabaritoQuestaoVouF(questao)
      break
    }
    case 'discursiva': {
      removerGabaritoQuestaoDiscursiva(questao)
      break
    }
    case 'bloco': {
      removerGabaritoQuestaoBloco(questao)
      break
    }
    case 'associacaoDeColunas': {
      removerGabaritoQuestaoAssociacaoDeColunas(questao)
      break
    }
    default: {
      console.warn('Tipo invalido de QUESTAO')
    }
  }
}

const removerGabaritoQuestaoMultiplaEscolha = questao => {
  delete questao.multiplaEscolha.respostaCerta
  questao.multiplaEscolha.alternativas.map(alternativa => delete alternativa.letraNaMatriz)
  return questao
}

const removerGabaritoQuestaoVouF = questao => {
  questao.vouf.afirmacoes.map(afirmacao => delete afirmacao.letra)
  return questao
}

const removerGabaritoQuestaoDiscursiva = questao => {
  delete questao.discursiva.expectativaDeResposta
  return questao
}

const removerGabaritoQuestaoBloco = questao => {
  questao.bloco.questoes.map(questao => removerGabarito(questao))
  return questao
}

const removerGabaritoQuestaoAssociacaoDeColunas = questao => {
  questao.associacaoDeColunas.colunaB.map(opcao => delete opcao.rotulo)
  return questao
}
