import { contratoCadernoInstanciado } from 'entidades/instanciamentoConcursos/contratoCadernoInstanciado'

import { modelFunctionWrapper, validarContratoOnSave } from 'main/helpers'
import { metodosParaDesativar, addAttributesOnCreateInstanciamentoConcursos } from 'main/models/instanciamentoConcursos'

export default Instanciamento => {
  Instanciamento.beforeRemote('create', modelFunctionWrapper(addAttributesOnCreateInstanciamentoConcursos))
  Instanciamento.observe('before save', modelFunctionWrapper(validarContratoOnSave(contratoCadernoInstanciado)))

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Instanciamento.disableRemoteMethodByName(metodo)
    })
  }
}
