import { contratoTurma } from 'entidades/turma/contratoTurma'
import { getTurmasRecentes } from 'main/models/turma'
import {
  modelFunctionWrapper,
  composeAsync,
  validarContratoOnSave,
  addDataUltimaAlteracaoOnSave,
  addDataCadastroOnNewInstance,
  addUsuarioIdBeforeCreate,
} from 'main/helpers'
import { unsetAttributesNaoPertencesAoContrato } from 'entidades/unsetAttributesNaoPertencesAoContrato'

import { metodosParaDesativar } from 'main/models/turma'

export default Turma => {
  Turma.observe(
    'before save',
    composeAsync([
      addDataCadastroOnNewInstance,
      addDataUltimaAlteracaoOnSave,
      validarContratoOnSave(contratoTurma),
      unsetAttributesNaoPertencesAoContrato(contratoTurma),
    ])
  )

  Turma.beforeRemote('create', modelFunctionWrapper(addUsuarioIdBeforeCreate))

  Turma.turmasRecentes = getTurmasRecentes
  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Turma.disableRemoteMethodByName(metodo)
    })
  }
}
