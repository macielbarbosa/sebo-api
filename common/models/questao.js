import { contratoQuestao } from 'entidades/questao'
import {
  addAtributesBeforeCreateQuestao,
  metodosParaDesativar,
  listaElaboradores,
  processarTagsVirtuaisEmQuestao,
  gerarPreviewQuestao,
  selecaoAutomatica,
  compartilharQuestao,
  copiarQuestaoPublica,
  getQuestoesPublicas,
  countQuestoesPublicas,
} from 'main/models/questao'
import {
  addDataUltimaAlteracaoOnSave,
  validarContratoOnSave,
  modelFunctionWrapper,
  composeAsync,
  inicializarInstancia,
} from 'main/helpers'
import { validacaoSemanticaQuestao } from 'entidades/questao/validar'
import { registrarExclusao, registrarAtualizacao, TIPO_QUESTAO as tipoModelo } from 'main/models/evento'

export default Questao => {
  Questao.observe(
    'before save',
    composeAsync([
      processarTagsVirtuaisEmQuestao,
      addDataUltimaAlteracaoOnSave,
      validacaoSemanticaQuestao,
      validarContratoOnSave(contratoQuestao),
    ])
  )

  Questao.selecaoAutomatica = modelFunctionWrapper(selecaoAutomatica)

  Questao.questoesPublicas = getQuestoesPublicas

  Questao.countQuestoesPublicas = countQuestoesPublicas

  Questao.preview = modelFunctionWrapper(gerarPreviewQuestao)

  Questao.elaboradores = listaElaboradores

  Questao.beforeRemote('create', modelFunctionWrapper(addAtributesBeforeCreateQuestao))

  Questao.beforeRemote('prototype.compartilhar', modelFunctionWrapper(inicializarInstancia))
  Questao.prototype.compartilhar = modelFunctionWrapper(compartilharQuestao)

  Questao.beforeRemote('prototype.copiar', modelFunctionWrapper(inicializarInstancia))
  Questao.prototype.copiar = modelFunctionWrapper(copiarQuestaoPublica)

  Questao.afterRemote('prototype.patchAttributes', registrarAtualizacao({ tipoModelo }))

  Questao.afterRemote('prototype.patchAttributes', modelFunctionWrapper(registrarAtualizacao({ tipoModelo })))

  Questao.afterRemote(
    'deleteById',
    modelFunctionWrapper(
      registrarExclusao({
        modelo: Questao,
        tipoModelo,
      })
    )
  )

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Questao.disableRemoteMethodByName(metodo)
    })
  }
}
