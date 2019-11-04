import app from 'server/server'
import uid from 'uuid/v4'

import { enumStatusFila } from 'entidades/response-created-instances'
import { enumOperacoes } from 'entidades/operacoesImpressao'

import { enviarFilaImpressao } from 'main/models/impressao'

const TIPOS_DADOS_COM_MARCA_DAGUA = ['caderno']

const atualizarStatusDeImpressao = async ({ impressaoId, status }) => {
  const impressao = await app.models.Impressao.findById(impressaoId)
  impressao.status = status
  await impressao.save()
}

const tratarInstanciamentoPronto = async ({ dados, operacao }) => {
  console.log(`Enviando para fila de impressão.`)
  const { impressaoId } = operacao.informacoes
  const impressao = await app.models.Impressao.findById(impressaoId)
  const tipoDados = impressao.template.split('/')[1]
  const temMarcaDagua = TIPOS_DADOS_COM_MARCA_DAGUA.includes(tipoDados)
  operacao = { id: uid(), tipo: enumOperacoes.rascunho, informacoes: { ...operacao.informacoes, temMarcaDagua } }
  await enviarFilaImpressao({ impressaoId, dados, template: impressao.template, operacao })
}

const tratarInstanciamentoFalho = ({ impressaoId, statusInstanciamento }) => {
  console.log(`Instanciamento não foi completo. Status: ${statusInstanciamento}`)
  console.log(`Atualizando status da impressão respectivamente.`)
  atualizarStatusDeImpressao({ impressaoId, status: statusInstanciamento })
}

export const tratarPreviewInstanciada = async mensagem => {
  console.log(`Tratando mensagem de instanciamento de preview.`)
  const { dados, operacao, statusInstanciamento } = mensagem
  const { impressaoId } = operacao.informacoes
  if (statusInstanciamento === enumStatusFila.pronto) {
    await tratarInstanciamentoPronto({ dados, operacao })
  } else {
    tratarInstanciamentoFalho({ impressaoId, statusInstanciamento })
  }
}
