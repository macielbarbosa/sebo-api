import { contratoInstanciamentoSave } from 'entidades/instanciamento/contratoInstanciamento'
import { modelFunctionWrapper, composeAsync, validarContratoOnSave, addDataCadastroOnNewInstance, addDataUltimaAlteracaoOnSave } from 'main/helpers'
import {
  metodosParaDesativar,
  receberMensagemInstanciamento,
  listaInstanciasDoCandidato,
  listaInstanciasDoCandidatoContagem,
  finalizarResolucao,
  salvarRespostaDiscente,
  iniciarResolucao,
  obterInstanciaSemGabarito,
  correcao,
  instanciamentosPorMatriz,
  getProvaParaVista,
  getEstaNoIntervaloDeAplicacao,
} from 'main/models/instanciamento'

import { enviarInstanciasProvaParaImpressao } from 'main/models/prova'

import { inicializarInstancia } from 'main/helpers'

export default Instanciamento => {
  Instanciamento.observe(
    'before save',
    composeAsync([addDataCadastroOnNewInstance, addDataUltimaAlteracaoOnSave, validarContratoOnSave(contratoInstanciamentoSave)])
  )

  Instanciamento.receberMensagemInstanciamento = receberMensagemInstanciamento

  Instanciamento.byCandidato = modelFunctionWrapper(listaInstanciasDoCandidato)
  Instanciamento.byCandidatoContagem = modelFunctionWrapper(listaInstanciasDoCandidatoContagem)
  Instanciamento.byMatriz = modelFunctionWrapper(instanciamentosPorMatriz)

  Instanciamento.beforeRemote('prototype.salvarResposta', modelFunctionWrapper(inicializarInstancia))
  Instanciamento.beforeRemote('prototype.finalizarResolucao', modelFunctionWrapper(inicializarInstancia))
  Instanciamento.beforeRemote('prototype.iniciarResolucao', modelFunctionWrapper(inicializarInstancia))
  Instanciamento.beforeRemote('prototype.obterInstanciaSemGabarito', modelFunctionWrapper(inicializarInstancia))
  Instanciamento.beforeRemote('prototype.correcao', modelFunctionWrapper(inicializarInstancia))

  Instanciamento.imprimirInstancias = modelFunctionWrapper(enviarInstanciasProvaParaImpressao)

  Instanciamento.prototype.vistaDeProva = getProvaParaVista
  Instanciamento.prototype.estaNoIntervaloDeAplicacao = getEstaNoIntervaloDeAplicacao
  Instanciamento.prototype.salvarResposta = modelFunctionWrapper(salvarRespostaDiscente)
  Instanciamento.prototype.iniciarResolucao = modelFunctionWrapper(iniciarResolucao)
  Instanciamento.prototype.finalizarResolucao = finalizarResolucao
  Instanciamento.prototype.obterInstanciaSemGabarito = obterInstanciaSemGabarito
  Instanciamento.prototype.correcao = modelFunctionWrapper(correcao)

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Instanciamento.disableRemoteMethodByName(metodo)
    })
  }
}
