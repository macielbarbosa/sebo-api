import {
  validarContratoOnSave,
  validarRemoteMethodComContrato,
  validarRemoteMethod,
  compose,
  inicializarInstancia,
  filterEmbedsMany,
  orderEmbedsManyPorAlteracao,
  modelFunctionWrapper,
  composeAsync,
  addDataUltimaAlteracaoOnSave,
  addDataCadastroBeforeCreate,
  adicionarAclsPermitirExecucao,
  desativarMetodos,
} from 'main/helpers'
import { registrarExclusao, registrarAtualizacao, TIPO_CONCURSO as tipoModelo } from 'main/models/evento'
import {
  metodosDesativadosConcurso,
  getCountConfig,
  questoesListCount,
  provasListCount,
  cadernosListCount,
  instanciarCaderno,
  cancelarInstanciamentoCaderno,
  excluirInstanciamentoCaderno,
  addAttributesBeforeCreateConcurso,
  gerarImpressaoDeQuestaoInstanciada,
  asssociarProvaAoCadernoDoConcurso,
  desasssociarProvaAoCadernoDoConcurso,
  previewCapa,
  aclsPermitirExecucaoConcurso,
  exportarImagensQuestoesConcurso,
} from 'main/models/concurso'
import {
  adicionarProvasListagem,
  adicionarProvasIndividual,
  criarCaderno,
  excluirCaderno,
  alterarCaderno,
  excluirAssociacoesProva,
} from 'main/models/cadernoNoConcurso'
import { criarEtapa, excluirCargo, excluirEtapa, alterarCargo, alterarEtapa } from 'main/models/cargo'
import {
  processarQuestaoIdsDeProvaDoConcurso,
  adicionarQuestoesListagem,
  adicionarQuestoesIndividual,
  isProvaAssociada,
  excluirAssociacoesQuestao,
} from 'main/models/provaNoConcurso'
import { addAttributesBeforeCreateQuestaoConcurso, isQuestaoAssociada } from 'main/models/questaoNoConcurso'

import { concurso } from 'entidades'
import { contratoQuestaoEmCriacao, contratoQuestaoEmEdicao } from 'entidades/questao/contratosQuestaoNoConcurso'
import { contratoConcurso } from 'entidades/concurso/contratoConcurso'

export default Concurso => {
  desativarMetodos(metodosDesativadosConcurso, Concurso)
  adicionarAclsPermitirExecucao(aclsPermitirExecucaoConcurso, Concurso)

  Concurso.afterRemote('prototype.patchAttributes', modelFunctionWrapper(registrarAtualizacao({ tipoModelo })))

  Concurso.afterRemote(
    'deleteById',
    modelFunctionWrapper(
      registrarExclusao({
        modelo: Concurso,
        tipoModelo,
      })
    )
  )

  Concurso.beforeRemote('create', modelFunctionWrapper(addAttributesBeforeCreateConcurso))

  Concurso.observe('before save', composeAsync([addDataUltimaAlteracaoOnSave, validarContratoOnSave(contratoConcurso)]))

  Concurso.beforeRemote('prototype.exportarImagensQuestoes', modelFunctionWrapper(inicializarInstancia))
  Concurso.prototype.exportarImagensQuestoes = modelFunctionWrapper(exportarImagensQuestoesConcurso)

  Concurso.previewCapa = modelFunctionWrapper(previewCapa)

  Concurso.gerarImpressaoDeQuestaoInstanciada = modelFunctionWrapper(gerarImpressaoDeQuestaoInstanciada)

  Concurso.beforeRemote('prototype.instanciar', modelFunctionWrapper(inicializarInstancia))
  Concurso.prototype.instanciar = modelFunctionWrapper(instanciarCaderno)

  Concurso.beforeRemote('prototype.cancelarInstanciamento', modelFunctionWrapper(inicializarInstancia))
  Concurso.prototype.cancelarInstanciamento = modelFunctionWrapper(cancelarInstanciamentoCaderno)

  Concurso.beforeRemote('prototype.excluirInstanciamento', modelFunctionWrapper(inicializarInstancia))
  Concurso.prototype.excluirInstanciamento = modelFunctionWrapper(excluirInstanciamentoCaderno)

  // questões do concurso
  Concurso.beforeRemote(
    'prototype.__create__questoesList',
    composeAsync([validarRemoteMethodComContrato(contratoQuestaoEmCriacao), addAttributesBeforeCreateQuestaoConcurso])
  )

  Concurso.beforeRemote(
    'prototype.__updateById__questoesList',
    modelFunctionWrapper(validarRemoteMethodComContrato(contratoQuestaoEmEdicao, { checkRequired: false }))
  )
  Concurso.afterRemote('prototype.__get__questoesList', compose([orderEmbedsManyPorAlteracao, filterEmbedsMany]))
  Concurso.afterRemote('prototype.__destroyById__questoesList', modelFunctionWrapper(excluirAssociacoesQuestao))

  Concurso.prototype.__countEmbed__questoesList = modelFunctionWrapper(questoesListCount)
  Concurso.beforeRemote('prototype.__countEmbed__questoesList', modelFunctionWrapper(inicializarInstancia))
  Concurso.remoteMethod('prototype.__countEmbed__questoesList', getCountConfig('questoes-list'))

  Concurso.prototype.isQuestaoAssociada = modelFunctionWrapper(isQuestaoAssociada)
  Concurso.beforeRemote('prototype.isQuestaoAssociada', modelFunctionWrapper(inicializarInstancia))

  // provas do concurso
  Concurso.beforeRemote(
    'prototype.__create__provasList',
    compose([
      modelFunctionWrapper(validarRemoteMethod(concurso.prova.validar.create)),
      modelFunctionWrapper(addDataCadastroBeforeCreate),
      processarQuestaoIdsDeProvaDoConcurso,
    ])
  )
  Concurso.beforeRemote(
    'prototype.__updateById__provasList',
    compose([
      modelFunctionWrapper(validarRemoteMethod(concurso.prova.validar.edit)),
      processarQuestaoIdsDeProvaDoConcurso,
    ])
  )

  Concurso.afterRemote(
    'prototype.__get__provasList',
    compose([orderEmbedsManyPorAlteracao, filterEmbedsMany, adicionarQuestoesListagem])
  )
  Concurso.afterRemote('prototype.__findById__provasList', modelFunctionWrapper(adicionarQuestoesIndividual))
  Concurso.afterRemote('prototype.__destroyById__provasList', modelFunctionWrapper(excluirAssociacoesProva))

  Concurso.prototype.__countEmbed__provasList = modelFunctionWrapper(provasListCount)
  Concurso.beforeRemote('prototype.__countEmbed__provasList', modelFunctionWrapper(inicializarInstancia))
  Concurso.remoteMethod('prototype.__countEmbed__provasList', getCountConfig('provas-list'))

  Concurso.prototype.isProvaAssociada = modelFunctionWrapper(isProvaAssociada)
  Concurso.beforeRemote('prototype.isProvaAssociada', modelFunctionWrapper(inicializarInstancia))

  // cadernos do concurso
  Concurso.afterRemote(
    'prototype.__get__cadernosList',
    compose([orderEmbedsManyPorAlteracao, filterEmbedsMany, adicionarProvasListagem])
  )
  Concurso.afterRemote('prototype.__findById__cadernosList', modelFunctionWrapper(adicionarProvasIndividual))

  Concurso.prototype.__countEmbed__cadernosList = modelFunctionWrapper(cadernosListCount)
  Concurso.beforeRemote('prototype.__countEmbed__cadernosList', modelFunctionWrapper(inicializarInstancia))
  Concurso.remoteMethod('prototype.__countEmbed__cadernosList', getCountConfig('cadernos-list'))

  Concurso.prototype.criarCaderno = modelFunctionWrapper(criarCaderno)
  Concurso.beforeRemote('prototype.criarCaderno', inicializarInstancia)

  // composeAsync([
  //   modelFunctionWrapper(inicializarInstancia),
  // validarRemoteMethodComContrato(contratoCadernoDoConcursoEmChamadas),
  // ])

  Concurso.prototype.excluirCaderno = modelFunctionWrapper(excluirCaderno)
  Concurso.beforeRemote('prototype.excluirCaderno', modelFunctionWrapper(inicializarInstancia))

  Concurso.prototype.alterarCaderno = modelFunctionWrapper(alterarCaderno)
  Concurso.beforeRemote('prototype.alterarCaderno', inicializarInstancia)

  Concurso.prototype.asssociarProvaAoCadernoDoConcurso = modelFunctionWrapper(asssociarProvaAoCadernoDoConcurso)
  Concurso.beforeRemote('prototype.asssociarProvaAoCadernoDoConcurso', modelFunctionWrapper(inicializarInstancia))

  Concurso.prototype.desasssociarProvaAoCadernoDoConcurso = modelFunctionWrapper(desasssociarProvaAoCadernoDoConcurso)
  Concurso.beforeRemote('prototype.desasssociarProvaAoCadernoDoConcurso', modelFunctionWrapper(inicializarInstancia))

  // Cargos do Concurso
  Concurso.beforeRemote(
    'prototype.__create__cargosList',
    composeAsync([validarRemoteMethod(concurso.cargo.validar.create)])
  )

  Concurso.prototype.alterarCargo = modelFunctionWrapper(alterarCargo)
  Concurso.beforeRemote(
    'prototype.alterarCargo',
    compose([inicializarInstancia, modelFunctionWrapper(validarRemoteMethod(concurso.cargo.validar.edit))])
  )

  Concurso.prototype.excluirCargo = modelFunctionWrapper(excluirCargo)
  Concurso.beforeRemote('prototype.excluirCargo', modelFunctionWrapper(inicializarInstancia))

  // Etapas do Concurso
  Concurso.prototype.criarEtapa = modelFunctionWrapper(criarEtapa)
  Concurso.beforeRemote(
    'prototype.criarEtapa',
    compose([inicializarInstancia, modelFunctionWrapper(validarRemoteMethod(concurso.cargo.validar.createEtapa))])
  )

  Concurso.prototype.alterarEtapa = modelFunctionWrapper(alterarEtapa)
  Concurso.beforeRemote(
    'prototype.alterarEtapa',
    compose([inicializarInstancia, modelFunctionWrapper(validarRemoteMethod(concurso.cargo.validar.editEtapa))])
  )

  Concurso.prototype.excluirEtapa = modelFunctionWrapper(excluirEtapa)
  Concurso.beforeRemote('prototype.excluirEtapa', modelFunctionWrapper(inicializarInstancia))
}
