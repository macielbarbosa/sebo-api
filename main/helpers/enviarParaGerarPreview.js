import uid from 'uuid/v4'

import { enumOperacoes } from 'entidades/operacoesInstanciamento'

import { criarImpressao } from 'main/models/impressao'
import { enviarFilaInstanciamento } from 'main/models/instanciamento'

export const enviarParaGerarPreview = async ({
  dadosParaInstanciar,
  tituloImpressao,
  usuarioId,
  extensao,
  contentType,
  template,
  informacoes,
}) => {
  const impressao = await criarImpressao({
    usuarioId,
    titulo: tituloImpressao,
    template,
    extensao,
    contentType,
  })
  const operacao = {
    id: uid(),
    tipo: enumOperacoes.geracaoDePreview,
    informacoes: { impressaoId: impressao.id, extensao, ...informacoes },
  }
  await enviarFilaInstanciamento({ operacao, dados: dadosParaInstanciar })
  return ['PROCESSANDO', impressao.id]
}
