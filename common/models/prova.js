import {
  compose,
  modelFunctionWrapper,
  addUsuarioIdBeforeCreate,
  addDataCadastroBeforeCreate,
  addDataUltimaAlteracaoOnSave,
  processarTagsOnSave,
  composeAsync,
  validarContratoOnSave,
  addAttributesBeforeCreate,
  addCriadoPorBeforeCreate,
  inicializarInstancia,
} from 'main/helpers'
import {
  metodosParaDesativar,
  bloquearEdicao,
  processarQuestaoIds,
  aplicarProvaNormal,
  reverterAplicacaoNormal,
  enviarInstanciasProvaParaImpressao,
  gerarPreviewProva,
  resumo,
  matrixDeCorrecao,
  publicarNotas,
  despublicarNotas,
  vistaDeProva,
  duplicarProva,
} from 'main/models/prova'
import { registrarExclusao, registrarAtualizacao, TIPO_PROVA as tipoModelo } from 'main/models/evento'
import { contratoProva } from 'entidades/prova/contratoProva'
import { enumStatusAplicacao } from 'entidades/enumStatusAplicacao'
import { salvarRespostas } from 'main/models/prova'

export default Prova => {
  Prova.observe(
    'before save',
    composeAsync([addDataUltimaAlteracaoOnSave, processarTagsOnSave, validarContratoOnSave(contratoProva)])
  )

  Prova.preview = modelFunctionWrapper(gerarPreviewProva)

  Prova.imprimirInstancias = modelFunctionWrapper(enviarInstanciasProvaParaImpressao)

  Prova.aplicar = modelFunctionWrapper(aplicarProvaNormal)

  Prova.resumo = modelFunctionWrapper(resumo)

  Prova.matrixDeCorrecao = modelFunctionWrapper(matrixDeCorrecao)

  Prova.publicarNotas = modelFunctionWrapper(publicarNotas)

  Prova.despublicarNotas = modelFunctionWrapper(despublicarNotas)

  Prova.reverterAplicacao = modelFunctionWrapper(reverterAplicacaoNormal)

  Prova.vistaDeProva = modelFunctionWrapper(vistaDeProva)

  Prova.duplicar = duplicarProva

  Prova.beforeRemote(
    'create',
    composeAsync([
      addAttributesBeforeCreate(() => ({ status: enumStatusAplicacao.elaboracao })),
      addAttributesBeforeCreate(() => ({ vistaProvaHabilitada: false })),
      addUsuarioIdBeforeCreate,
      addCriadoPorBeforeCreate,
      addDataCadastroBeforeCreate,
      processarQuestaoIds,
    ])
  )

  Prova.beforeRemote('prototype.patchAttributes', compose([bloquearEdicao, modelFunctionWrapper(processarQuestaoIds)]))

  Prova.afterRemote('prototype.patchAttributes', modelFunctionWrapper(registrarAtualizacao({ tipoModelo })))

  Prova.beforeRemote('prototype.resposta', modelFunctionWrapper(inicializarInstancia))

  Prova.prototype.resposta = modelFunctionWrapper(salvarRespostas)

  Prova.afterRemote(
    'deleteById',
    modelFunctionWrapper(
      registrarExclusao({
        modelo: Prova,
        tipoModelo,
      })
    )
  )

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Prova.disableRemoteMethodByName(metodo)
    })
  }
}
