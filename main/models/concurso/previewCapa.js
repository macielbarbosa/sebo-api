import uid from 'uuid/v4'

import { tipos } from 'entidades/impressao/contratoImpressao'
import { enumOperacoes } from 'entidades/operacoesImpressao'
import { contratoCapa } from 'entidades/concurso/contratoCapa'

import { validarContratoComThrow } from 'main/helpers'
import { convertToFileName } from 'main/utils'
import { criarImpressao, enviarFilaImpressao } from 'main/models/impressao'

const enviarCapaParaFilaDeImpressao = ({ impressao, capa }) => {
  console.log(`Enviando preview de capa de concurso para fila de impressão.`)
  const operacao = { id: uid(), tipo: enumOperacoes.capaCaderno, informacoes: { extensao: 'pdf' } }
  return enviarFilaImpressao({
    impressaoId: impressao.id,
    dados: capa,
    template: impressao.template,
    operacao,
  })
}

const criarImpressaoDaCapa = async ({ titulo, template, usuarioId }) => {
  titulo = convertToFileName(`${titulo}`)
  template = `${template.toLowerCase()}/capa`
  const metadados = { tipo: tipos.capaCaderno }
  const extensao = 'pdf'
  const contentType = 'application/pdf'
  return await criarImpressao({ usuarioId, titulo, template, metadados, extensao, contentType })
}

export const previewCapa = async (capa, options) => {
  const usuarioId = options.accessToken.userId
  validarContratoComThrow({ contrato: contratoCapa, dados: capa })
  let impressao = await criarImpressaoDaCapa({ ...capa, usuarioId })
  await enviarCapaParaFilaDeImpressao({ impressao, capa })
  return [impressao]
}
