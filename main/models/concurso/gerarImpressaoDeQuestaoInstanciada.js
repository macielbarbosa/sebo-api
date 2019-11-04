import app from 'server/server'
import uid from 'uuid/v4'

import { tipos } from 'entidades/impressao/contratoImpressao'
import { tiposTemplateRecursoDeQuestao } from 'entidades/enumTipoTemplateRecursoDeQuestao'
import { enumOperacoes } from 'entidades/operacoesImpressao'

import { convertToFileName } from 'main/utils'
import { NotFoundError } from 'main/erros'
import { criarImpressao, enviarFilaImpressao } from 'main/models/impressao'

const acharQuestaoNoCadernoInstanciado = (numeroDaQuestao, cadernoInstanciado) => {
  let questaoAchada
  const achou = cadernoInstanciado.caderno.provas.some(prova =>
    prova.grupos.some(grupo =>
      grupo.questoes.some(questao => {
        if (questao.bloco) {
          return questao.bloco.questoes.some(questao => {
            if (questao.numeroNaInstancia === numeroDaQuestao) {
              questaoAchada = { ...questao }
              return true
            } else {
              return false
            }
          })
        } else if (questao.numeroNaInstancia === numeroDaQuestao) {
          questaoAchada = { ...questao }
          return true
        } else {
          return false
        }
      })
    )
  )
  if (achou) return questaoAchada
  else throw new NotFoundError('Numero da questão não foi achado na versão do caderno.')
}

const getCadernoInstanciado = async ({ versaoCadernoId, usuarioId }) => {
  try {
    return await app.models.InstanciamentoConcursos.findOne({
      where: { 'caderno.versaoCaderno.id': versaoCadernoId, usuarioId },
    })
  } catch (error) {
    console.log(error)
    throw new NotFoundError('Versão do caderno não foi achada.')
  }
}

const criarImpressaoQuestaoInstanciada = async ({ caderno, numeroDaQuestao, usuarioId, versaoCadernoId, concurso }) => {
  const titulo = convertToFileName(`q${numeroDaQuestao}-${caderno.titulo}`)
  const template = tiposTemplateRecursoDeQuestao[concurso.opcoes.template.toLowerCase()]
  const metadados = { tipo: tipos.questaoDeCadernoInstanciado, versaoCadernoId, numeroDaQuestao }
  const extensao = 'pdf'
  const contentType = 'application/pdf'
  return await criarImpressao({ usuarioId, titulo, template, metadados, extensao, contentType })
}

const enviarQuestaoInstanciadaParaFilaDeImpressao = ({ impressao, questaoDeRecurso }) => {
  console.log(`Enviando para questão instanciada de concurso para fila de impressão.`)
  const operacao = { id: uid(), tipo: enumOperacoes.questaoDeRecurso, informacoes: { extensao: 'pdf' } }
  return enviarFilaImpressao({
    impressaoId: impressao.id,
    dados: questaoDeRecurso,
    template: impressao.template,
    operacao,
  })
}

const getEtapaECargo = ({ concurso, cadernoInstanciado }) => {
  let etapaAchada
  const cargo = concurso.cargos.find(cargo =>
    cargo.etapas.find(etapa => {
      const etapaFoiAchada = etapa.cadernos.find(cadernoId => cadernoId === cadernoInstanciado.caderno.id)
      if (etapaFoiAchada) etapaAchada = etapa
      return etapaFoiAchada
    })
  )
  if (!cargo) throw new NotFoundError('Caderno não foi achado em nenhum cargo.')
  if (!etapaAchada) throw new NotFoundError('Caderno não foi achado em nenhuma etapa.')
  return { cargo, etapa: etapaAchada }
}

const getQuestaoDeRecurso = ({ questao, etapa, cargo, concurso, cadernoInstanciado }) => ({
  questao,
  tituloConcurso: concurso.titulo,
  tituloEtapa: etapa.titulo,
  tituloCargo: cargo.titulo,
  apelidoDaVersaoDoCaderno: cadernoInstanciado.caderno.versaoCaderno.apelido,
})

export const gerarImpressaoDeQuestaoInstanciada = async (versaoCadernoId, numeroDaQuestao, options) => {
  const usuarioId = options.accessToken.userId
  const cadernoInstanciado = await getCadernoInstanciado({ versaoCadernoId, usuarioId })
  const concurso = await app.models.Concurso.findById(cadernoInstanciado.idConcurso)
  const { etapa, cargo } = getEtapaECargo({ concurso, cadernoInstanciado })
  const questao = acharQuestaoNoCadernoInstanciado(numeroDaQuestao, cadernoInstanciado)
  const questaoDeRecurso = getQuestaoDeRecurso({ questao, etapa, cargo, concurso, cadernoInstanciado })
  const impressao = await criarImpressaoQuestaoInstanciada({
    caderno: cadernoInstanciado.caderno,
    numeroDaQuestao,
    questao,
    usuarioId,
    versaoCadernoId,
    concurso,
  })
  await enviarQuestaoInstanciadaParaFilaDeImpressao({ impressao, questaoDeRecurso })
  return [impressao]
}
