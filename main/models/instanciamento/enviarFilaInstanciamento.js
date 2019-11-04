import uid from 'uuid/v4'

import app from 'server/server'

import { validarContratoComThrow } from 'main/helpers'
import { contratoMensagem } from 'entidades/request-created-instances'

export const enviarFilaInstanciamento = async ({ operacao, dados }) => {
  const mensagem = { id: uid(), operacao, dados }
  validarContratoComThrow({ contrato: contratoMensagem, dados: mensagem, errorType: 'Error' })
  console.log(`Enviando mensagem (${mensagem.id}) para instanciamento.`)
  console.log(`Operação: ${JSON.stringify(operacao)}`)
  try {
    await app.models.Instanciamento.enviarFilaInstanciamento(mensagem)
    console.log(`(${mensagem.id}) enviada para a fila de instanciamento com sucesso`)
  } catch (error) {
    console.error(`Erro ao enviar (${mensagem.id}) para instanciamento`, error)
    throw error
  }
}
