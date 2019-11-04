import { metodosParaDesativar, aceitarCompartilhamento, rejeitarCompartilhamento } from 'main/models/questaoCedida'
import { modelFunctionWrapper, inicializarInstancia } from 'main/helpers'

export default QuestaoCedida => {
  QuestaoCedida.beforeRemote('prototype.aceitar', modelFunctionWrapper(inicializarInstancia))
  QuestaoCedida.prototype.aceitar = modelFunctionWrapper(aceitarCompartilhamento)

  QuestaoCedida.beforeRemote('prototype.rejeitar', modelFunctionWrapper(inicializarInstancia))
  QuestaoCedida.prototype.rejeitar = modelFunctionWrapper(rejeitarCompartilhamento)

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      QuestaoCedida.disableRemoteMethodByName(metodo)
    })
  }
}
