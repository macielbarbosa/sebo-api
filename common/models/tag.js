import {
  composeAsync,
  validarContratoOnSave,
  addDataUltimaAlteracaoOnSave,
  addDataCadastroOnNewInstance,
} from 'main/helpers'
import { metodosParaDesativar, removeReferences } from 'main/models/tag'
import { contratoTag } from 'entidades/tag/contratoTag'

export default Tag => {
  Tag.observe(
    'before save',
    composeAsync([addDataCadastroOnNewInstance, addDataUltimaAlteracaoOnSave, validarContratoOnSave(contratoTag)])
  )
  Tag.observe('before delete', composeAsync([removeReferences]))
  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Tag.disableRemoteMethodByName(metodo)
    })
  }
}
