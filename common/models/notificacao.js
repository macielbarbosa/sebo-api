import {
  composeAsync,
  modelFunctionWrapper,
  inicializarInstancia,
  validarContratoOnSave,
  addDataUltimaAlteracaoOnSave,
  addDataCadastroOnNewInstance,
} from 'main/helpers'
import { metodosParaDesativar, mudarStatus } from 'main/models/notificacao'
import { registrarExclusao, registrarAtualizacao, TIPO_NOTIFICACAO as tipoModelo } from 'main/models/evento'
import { enumStatusNotificacao } from 'entidades/notificacao/enumStatusNotificacao'
import { contratoNotificacao } from 'entidades/notificacao/contratoNotificacao'

export default Notificacao => {
  Notificacao.observe(
    'before save',
    composeAsync([
      addDataCadastroOnNewInstance,
      addDataUltimaAlteracaoOnSave,
      validarContratoOnSave(contratoNotificacao),
    ])
  )

  // Notificacao.beforeRemote('create', modelFunctionWrapper())

  Notificacao.afterRemote('prototype.patchAttributes', modelFunctionWrapper(registrarAtualizacao({ tipoModelo })))

  Notificacao.afterRemote(
    'deleteById',
    modelFunctionWrapper(
      registrarExclusao({
        modelo: Notificacao,
        tipoModelo,
      })
    )
  )

  Notificacao.beforeRemote('prototype.marcarLida', modelFunctionWrapper(inicializarInstancia))
  Notificacao.prototype.marcarLida = modelFunctionWrapper(mudarStatus(enumStatusNotificacao.lida))
  Notificacao.beforeRemote('prototype.marcarNaoLida', modelFunctionWrapper(inicializarInstancia))
  Notificacao.prototype.marcarNaoLida = modelFunctionWrapper(mudarStatus(enumStatusNotificacao.nova))

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Notificacao.disableRemoteMethodByName(metodo)
    })
  }
}
