import uid from 'uuid/v4'
import app from 'server/server'

import { registrarErroInstanciamento, checarSeCadernoGerandoEssaVersao } from 'main/models/concurso'

import { enumOperacoes } from 'entidades/operacoesImpressao'
import { enumTipoTemplate } from 'entidades/enumTipoTemplate'
import { enumStatusFila } from 'entidades/response-created-instances'
import { tipos as tiposDeImpressao } from 'entidades/impressao/contratoImpressao'

import { enviarFilaImpressao } from 'main/models/impressao'
import { getGabarito } from 'main/models/concurso'

const enviarGabaritosParaFilaDeImpressao = async ({ instanciamentos, concursoId, versao, cadernoId }) => {
  const gabaritos = []
  const concurso = await app.models.Concurso.findById(concursoId)
  instanciamentos.forEach(({ caderno }) => gabaritos.push(getGabarito({ caderno, concurso })))
  const filter = { where: { 'metadados.versao': versao, 'metadados.tipo': tiposDeImpressao.gabaritosConcurso } }
  const impressaoGabaritos = await app.models.Impressao.findOne(filter)
  await enviarFilaImpressao({
    impressaoId: impressaoGabaritos.id,
    dados: gabaritos,
    template: enumTipoTemplate.gabaritoConcurso,
    operacao: {
      id: uid(),
      tipo: enumOperacoes.gabaritosConcurso,
      informacoes: { impressaoGabaritosId: impressaoGabaritos.id, concursoId, versao, cadernoId },
    },
  })
}

const tratarGabaritos = async ({ concursoId, versao, cadernoId }) => {
  const concurso = await app.models.Concurso.findById(concursoId)
  let instanciamentos = await app.models.InstanciamentoConcursos.find({ where: { versao } })
  const todasVersoesCadernoInstanciados = concurso.opcoes.numeroInstancias === instanciamentos.length
  if (todasVersoesCadernoInstanciados)
    await enviarGabaritosParaFilaDeImpressao({ instanciamentos, concursoId, versao, cadernoId })
}

const enviarCadernoParaFilaDeImpressao = ({ instanciamento, informacoes }) =>
  enviarFilaImpressao({
    impressaoId: informacoes.impressaoId,
    dados: instanciamento.caderno,
    template: informacoes.template,
    operacao: { id: uid(), tipo: enumOperacoes.cadernoDeConcurso, informacoes },
  })

export const criarCadernoInstanciado = async ({ dados, versaoCaderno, concursoId, versao }) => {
  const concurso = await app.models.Concurso.findById(concursoId)
  dados = { ...dados }
  delete dados.tipo
  const cadernoInstanciado = {
    caderno: { ...dados, versaoCaderno },
    usuarioId: concurso.usuarioId,
    idConcurso: concurso.id,
    versao,
    tipo: 'caderno',
    dataCadastro: new Date().toISOString(),
  }
  return await app.models.InstanciamentoConcursos.create(cadernoInstanciado)
}

export const tratarInstanciamentoConcursoPronto = async ({ dados, operacao }) => {
  const { informacoes } = operacao
  const { versao, concursoId, versaoCaderno } = informacoes
  console.log(`Tratando instanciamento pronto do concurso (${concursoId}).`)
  const cadernoGerandoEssaVersao = await checarSeCadernoGerandoEssaVersao({ concursoId, cadernoId: dados.id, versao })
  if (!cadernoGerandoEssaVersao) return
  const instanciamento = await criarCadernoInstanciado({ dados, versaoCaderno, concursoId, versao })
  await tratarGabaritos({ concursoId, versao, cadernoId: dados.id })
  await enviarCadernoParaFilaDeImpressao({ instanciamento, informacoes })
  return
}

const tratarInstanciamentoConcursoFalho = async ({ statusInstanciamento, operacao }) => {
  const { versao, concursoId, cadernoId } = operacao.informacoes
  console.log(`Tratando instanciamento (${statusInstanciamento}) do concurso (${concursoId}).`)
  const concurso = await app.models.Concurso.findById(concursoId)
  await registrarErroInstanciamento({ versao, cadernoId, concurso })
}

export const tratarInstanciamentoConcurso = async (dados, statusInstanciamento, operacao) => {
  if (statusInstanciamento === enumStatusFila.pronto) await tratarInstanciamentoConcursoPronto({ dados, operacao })
  else await tratarInstanciamentoConcursoFalho({ statusInstanciamento, operacao })
}
