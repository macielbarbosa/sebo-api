import { validarContratoComThrow, enviarParaGerarPreview } from 'main/helpers'
import { contratoChamadaPreviewCaderno } from 'entidades/caderno'
import { enumTiposDadosInstanciamento } from 'entidades/enumTiposDadosInstanciamento'

export const gerarPreviewCaderno = (dados, options) => {
  validarContratoComThrow({ contrato: contratoChamadaPreviewCaderno, dados })
  const usuarioId = options.accessToken.userId
  const tituloImpressao = dados.titulo
  dados.tipo = enumTiposDadosInstanciamento.caderno
  return enviarParaGerarPreview({
    dadosParaInstanciar: dados,
    template: dados.template,
    tituloImpressao,
    usuarioId,
    extensao: 'pdf',
    contentType: 'application/pdf',
  })
}
