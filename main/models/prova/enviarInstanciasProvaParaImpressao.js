import uid from 'uuid/v4'

import app from 'server/server'

import { criarImpressao } from 'main/models/impressao'
import { enviarFilaImpressao } from 'main/models/impressao/enviarFilaImpressao'

import { enumOperacoes } from 'entidades/operacoesImpressao'
import { enumTipoTemplateProva } from 'entidades/prova/enumTipoTemplateProva'

const getInstancias = async (modelId, template) => {
  if (template === enumTipoTemplateProva.provaGeralCandidato)
    return await app.models.Instanciamento.find({ where: { id: modelId } })
  else return await app.models.Instanciamento.find({ where: { idMatriz: modelId } })
}

export const getDadosParaImpressao = async (instanciamentos, template) => {
  if (template !== enumTipoTemplateProva.provaGeralCandidato)
    return await instanciamentos.map(instancia => instancia[instancia.tipo])
  else return instanciamentos
}

export const enviarInstanciasProvaParaImpressao = async (modelId, dadosProva) => {
  const { template, titulo } = dadosProva
  const instanciamentos = await getInstancias(modelId, template)
  console.log('Número de instancias encontradas para essa prova: ', instanciamentos.length)
  let dadosParaImpressao = await getDadosParaImpressao(instanciamentos, template)
  console.log('Número de instancias colocadas no array para envio de mensagem: ', dadosParaImpressao.length)
  if (dadosParaImpressao.length === 1) dadosParaImpressao = dadosParaImpressao[0]
  const impressao = await criarImpressao({
    usuarioId: dadosProva.usuarioId,
    titulo,
    template,
    extensao: 'pdf',
    contentType: 'application/pdf',
  })
  await enviarFilaImpressao({
    impressaoId: impressao.id,
    template,
    dados: dadosParaImpressao,
    operacao: { id: uid(), tipo: enumOperacoes.oficial },
  })
  return ['PROCESSANDO', impressao.id]
}
