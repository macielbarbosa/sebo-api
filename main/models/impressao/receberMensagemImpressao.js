import fs from 'fs'
import axios from 'axios'

import app from 'server/server'
import { enumOperacoes } from 'entidades/operacoesImpressao'

import { registrarErroInstanciamento } from 'main/models/concurso'

import { tratarOperacoesConcurso } from './tratarOperacoesConcurso'
import { tratarExportacaoImagemQuestaoConcurso } from './tratarExportacaoImagemQuestaoConcurso'

const salvarEmStorage = async ({ url, extensao, fileName }) => {
  const response = await axios({ method: 'get', url, responseType: 'stream' })
  response.data.pipe(fs.createWriteStream(`./storage/${extensao}/${fileName}.${extensao}`))
}

const tratarOperacao = async mensagem => {
  const { operacao, status } = mensagem
  if (status === 'PRONTO') {
    if (operacao.tipo === enumOperacoes.cadernoDeConcurso || operacao.tipo === enumOperacoes.gabaritosConcurso) {
      await tratarOperacoesConcurso(operacao.informacoes)
    } else if (operacao.tipo === enumOperacoes.imagemQuestaoConcurso) {
      await tratarExportacaoImagemQuestaoConcurso(operacao.informacoes)
    }
  } else {
    const operacaoDeConcurso =
      operacao.tipo === enumOperacoes.cadernoDeConcurso || operacao.tipo === enumOperacoes.gabaritosConcurso
    if (operacaoDeConcurso) {
      const { concursoId, versao } = operacao.informacoes
      const concurso = await app.models.Concurso.findById(concursoId)
      await registrarErroInstanciamento(versao, concurso)
    }
  }
}

const atualizarImpressao = async mensagem => {
  const impressao = await app.models.Impressao.findById(mensagem.impressaoId)
  impressao.status = mensagem.status
  return await impressao.save()
}

const handleSalvarEmStorage = async (mensagem, impressao) => {
  try {
    if (mensagem.status === 'PRONTO') {
      const { url } = mensagem
      await salvarEmStorage({ url, extensao: impressao.extensao, fileName: impressao.id })
      console.log(`Arquivo salvo com sucesso.`)
    }
  } catch (error) {
    console.error(`Falha ao processar mensagem de impressão recebida e salvá-la em storage.`)
    console.error(`mensagem: `, JSON.stringify(mensagem))
    console.error(error)
  }
}

export const receberMensagemImpressao = async payload => {
  const mensagem = JSON.parse(payload)
  try {
    console.log(`Recebendo mensagem de impressao de id (${mensagem.id}).`)
    console.log(`Relativa à operação: (${JSON.stringify(mensagem.operacao, null, 2)}).`)
    const impressao = await atualizarImpressao(mensagem)
    await handleSalvarEmStorage(mensagem, impressao)
    console.log(`A impressão (${mensagem.id}) teve seu status atualizado para: ${impressao.status}.`)
    await tratarOperacao(mensagem)
    console.log(`Mensagem ${mensagem.id} processada com sucesso.`)
  } catch (error) {
    console.error(error)
    console.error(`Erro ao receber mensagem de impressão (${mensagem.id})`)
    console.error(`Relativa à operação: (${JSON.stringify(mensagem.operacao, null, 2)}).`)
  }
}
