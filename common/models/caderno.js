import {
  modelFunctionWrapper,
  addUsuarioIdBeforeCreate,
  composeAsync,
  addDataCadastroBeforeCreate,
  validarContratoOnSave,
  addDataUltimaAlteracaoOnSave,
} from 'main/helpers'
import { contratoCaderno } from 'entidades/caderno/contratoCaderno'
import { metodosParaDesativar, gerarPreviewCaderno } from 'main/models/caderno'
import { registrarExclusao, registrarAtualizacao, TIPO_CADERNO as tipoModelo } from 'main/models/evento'

export default Caderno => {
  Caderno.observe('before save', composeAsync([addDataUltimaAlteracaoOnSave, validarContratoOnSave(contratoCaderno)]))

  Caderno.preview = modelFunctionWrapper(gerarPreviewCaderno)

  Caderno.beforeRemote('create', composeAsync([addDataCadastroBeforeCreate, addUsuarioIdBeforeCreate]))

  Caderno.afterRemote('prototype.patchAttributes', modelFunctionWrapper(registrarAtualizacao({ tipoModelo })))

  Caderno.afterRemote(
    'deleteById',
    modelFunctionWrapper(
      registrarExclusao({
        modelo: Caderno,
        tipoModelo,
      })
    )
  )

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Caderno.disableRemoteMethodByName(metodo)
    })
  }
}
