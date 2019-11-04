import { validarContratoComThrow, enviarParaGerarPreview } from 'main/helpers'
import { contratoQuestaoPreview } from 'entidades/questao/questaoPreview'
import { enumTipoTemplateQuestao } from 'entidades/questao/enumTipoTemplateQuestao'

export const gerarPreviewQuestao = (dados, options) => {
  validarContratoComThrow({ contrato: contratoQuestaoPreview, dados })
  const usuarioId = options.accessToken.userId
  const tituloImpressao = 'preview'
  const template = enumTipoTemplateQuestao[dados.tipo + `Geral`]
  return enviarParaGerarPreview({
    dadosParaInstanciar: dados,
    template,
    tituloImpressao,
    usuarioId,
    extensao: 'pdf',
    contentType: 'application/pdf',
    informacoes: { tipoDados: 'questao' },
  })
}
