import uid from 'uuid/v4'

import app from 'server/server'

import { validarContratoComThrow } from 'main/helpers'

import { contratoMensagem } from 'entidades/request-render-pdf'

import { converterImagensPara64 } from './converterImagensPara64'

export const enviarFilaImpressao = async ({ impressaoId, dados, template, operacao }) => {
  const mensagem = { id: uid(), impressaoId, dados: converterImagensPara64(dados), template, operacao }
  validarContratoComThrow({ contrato: contratoMensagem, dados: mensagem, errorType: 'Error' })
  console.log(`Enviando mensagem (${mensagem.id}) para impressão.`)
  console.log(`Iniciando operação: ${JSON.stringify(operacao)}`)
  try {
    await app.models.Impressao.enviarFilaImpressao(mensagem)
    console.log(`Mensagem (${mensagem.id}) enviada para a fila de impressão com sucesso.`)
  } catch (error) {
    console.error(`Erro ao enviar mensagem (${mensagem.id}) para fila de impressão.`, error)
    throw error
  }
}
