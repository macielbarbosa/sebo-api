import uid from 'uuid/v4'

import { contratoDadosAplicacao } from 'entidades/prova'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'
import { enumOperacoes } from 'entidades/operacoesInstanciamento'
import { enumTipoProva } from 'entidades/enumTipoProva'

import { ForbiddenError } from 'main/erros'
import { validarContratoComThrow } from 'main/helpers'
import { enviarFilaInstanciamento } from 'main/models/instanciamento'

import { getProvaParaInstanciamento } from './getProvaParaInstanciamento'
import { selecionaQuestoesDinamicas } from './selecionaQuestoesDinamicas'

const checarStatus = ({ instance }) => {
  console.log(`Status da prova checado`)
  const estaEmElaboracao = instance.status === enumStatusAplicacao.elaboracao
  const estaEmProvaParaAplicacao = instance.status === enumStatusAplicacao.prontaParaAplicacao
  if (!estaEmElaboracao && !estaEmProvaParaAplicacao) {
    throw new ForbiddenError('Só é possível aplicar provas em elaboração')
  }
}

const editarProva = async ({ instance, dadosAplicacao }) => {
  dadosAplicacao.dataInstanciamento = new Date().toISOString()
  instance.dadosAplicacao = dadosAplicacao
  instance.status = enumStatusAplicacao.prontaParaAplicacao
  const updatedInstance = await instance.save()
  console.log(`Dados de aplicação inseridos na prova com sucesso`)
  return updatedInstance.toObject()
}

const prepararInstanciamento = async ({ dadosProva, template, todasAsQuestoes }) => {
  console.log(`Gerando objeto JSON e preparando para enviar para a fila de instanciamento`)
  const dados = await getProvaParaInstanciamento({ prova: dadosProva, todasAsQuestoes, isTopLevel: true })
  await enviarFilaInstanciamento({ operacao: { id: uid(), tipo: enumOperacoes.instanciamento }, dados, template })
}

const retornaQuestaoDeGrupo = ({ questao }) => {
  return { questaoId: questao.id, fixa: false, peso: 1 }
}

const retornaQuestoesDeGrupo = ({ grupo }) => {
  return grupo.questoes.map(questao => retornaQuestaoDeGrupo({ questao }))
}

const montarProvaDinamica = async ({ dadosProva, participante, options }) => {
  let prova = { ...dadosProva }
  prova.dadosAplicacao.grupos = await selecionaQuestoesDinamicas(dadosProva.dinamica, options)
  prova.grupos = prova.dadosAplicacao.grupos.map(grupo => {
    return { questoes: retornaQuestoesDeGrupo({ grupo }) }
  })
  prova.tipoProva = enumTipoProva.dinamica
  prova.dadosAplicacao.participantes = [participante]
  return prova
}

export const aplicarProva = async ({ instance, dadosAplicacao, options }) => {
  validarContratoComThrow({ contrato: contratoDadosAplicacao, dados: dadosAplicacao })
  console.log(`Prova de id ${instance.id} sendo preparada para ser enviada para instanciamento`)
  checarStatus({ instance })
  const dadosProva = await editarProva({ instance, dadosAplicacao })

  if (instance.tipoProva === enumTipoProva.dinamica) {
    for (let participante of dadosProva.dadosAplicacao.participantes) {
      const provaDinamica = await montarProvaDinamica({ dadosProva, participante, options })
      await prepararInstanciamento({
        dadosProva: provaDinamica,
        template: provaDinamica.template,
        todasAsQuestoes: provaDinamica.dadosAplicacao.grupos[0].questoes,
      })
    }
  } else {
    const todasAsQuestoes = await instance.questoes()
    await prepararInstanciamento({ dadosProva, template: instance.template, todasAsQuestoes })
  }
  return [200, dadosProva]
}
