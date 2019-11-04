import { enumOperacoes } from 'entidades/operacoesInstanciamento'
import { contratoMensagem } from 'entidades/response-created-instances'

import { validarContratoComThrow } from 'main/helpers'

import { tratarPreviewInstanciada } from './tratarPreviewInstanciada'
import { tratarInstanciamento } from './tratarInstanciamento'

const tratamentosOperacoes = {
  [enumOperacoes.geracaoDePreview]: tratarPreviewInstanciada,
  [enumOperacoes.instanciamento]: tratarInstanciamento,
}

export const receberMensagemInstanciamento = async payload => {
  try {
    const mensagem = JSON.parse(payload)
    validarContratoComThrow({ contrato: contratoMensagem, dados: mensagem })
    const { id, operacao, statusInstanciamento } = mensagem
    console.log(`Recebendo mensagem de instanciamento com id: ${id}.`)
    console.log(`Relativa à operacão: ${JSON.stringify(operacao)}.`)
    console.log('Status de recebimento de mensagem de instanciamento: ', statusInstanciamento)
    const tratar = tratamentosOperacoes[operacao.tipo]
    await tratar(mensagem)
    console.log(`Fim do tratamento da mensagem ${id}.`)
  } catch (error) {
    console.error(`Falha no recebimento de mensagem de instanciamento.`)
    console.error(`Payload: `, payload)
    console.error(error)
    if (error.status === 422) console.error(JSON.stringify(error.details))
  }
}
