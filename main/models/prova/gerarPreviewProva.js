import { validarContratoComThrow, enviarParaGerarPreview } from 'main/helpers'
import { contratoChamadaPreviewProva } from 'entidades/prova'
import { enumTipoProva } from 'entidades/enumTipoProva'
import { enumTiposDadosInstanciamento } from 'entidades/enumTiposDadosInstanciamento'
import { selecionaQuestoesDinamicas } from './selecionaQuestoesDinamicas'

export const gerarPreviewProva = async (prova, opcoesInstanciamento, options) => {
  if (prova.tipoProva === enumTipoProva.dinamica) {
    prova.grupos = await selecionaQuestoesDinamicas(prova.dinamica, options)
  }
  validarContratoComThrow({ contrato: contratoChamadaPreviewProva, dados: prova })
  const usuarioId = options.accessToken.userId
  prova.tipo = enumTiposDadosInstanciamento.prova
  const tituloImpressao = prova.titulo
  return enviarParaGerarPreview({
    dadosParaInstanciar: prova,
    template: prova.template,
    tituloImpressao,
    usuarioId,
    informacoes: { opcoesInstanciamento },
    extensao: 'pdf',
    contentType: 'application/pdf',
  })
}
