export { OnSavePreset } from './OnSavePreset'
export { injetarMultiplos, injetarMultiplosOperationMethods } from './injetarMultiplos'
export { achouInstancia } from './achouInstancia'
export { getDados } from './getDados'
export { processarTagsVirtuais } from './processarTagsVirtuais'
export { substituirTagsVirtuaisPorTagIds, processarTagsOnSave } from './processarTagsVirtuais'
export { enviarParaGerarPreview } from './enviarParaGerarPreview'
export { compose, composeAsync } from './compose'
export { validarRemoteMethodComContrato, validarRemoteMethod } from './validarRemoteMethod'
export {
  validarOnSave,
  validarContratoOnSave,
  addAttributesOnSave,
  addDataUltimaAlteracaoOnSave,
  addDataCadastroOnNewInstance,
  addAttributesOnNewInstance,
  transferAttributesToHookState,
} from './beforeSave'
export { inicializarInstancia } from './inicializarInstancia'
export { filterEmbedsMany } from './filterEmbedsMany'
export { orderEmbedsManyPorAlteracao } from './orderEmbedsManyPorAlteracao'
export { modelFunctionWrapper } from './modelFunctionWrapper'
export { validarContratoComThrow, validarComThrow } from './validar'
export {
  addDataCadastroBeforeCreate,
  addUsuarioIdBeforeCreate,
  addAttributesBeforeCreate,
  addCriadoPorBeforeCreate,
} from './addBeforeCreate'
export { adicionarAclsPermitirExecucao } from './adicionarAclsPermitirExecucao'
export { desativarMetodos } from './desativarMetodos'
