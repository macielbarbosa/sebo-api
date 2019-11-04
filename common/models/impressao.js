import {
  modelFunctionWrapper,
  addUsuarioIdBeforeCreate,
  composeAsync,
  addDataCadastroBeforeCreate,
  validarContratoOnSave,
  addDataUltimaAlteracaoOnSave,
} from 'main/helpers'
import { contratoImpressao } from 'entidades/impressao/contratoImpressao'
import { download, receberMensagemImpressao, metodosParaDesativar } from 'main/models/impressao'

export default Impressao => {
  Impressao.observe(
    'before save',
    composeAsync([addDataUltimaAlteracaoOnSave, validarContratoOnSave(contratoImpressao)])
  )

  Impressao.beforeRemote('create', composeAsync([addDataCadastroBeforeCreate, addUsuarioIdBeforeCreate]))

  Impressao.download = modelFunctionWrapper(download(Impressao))

  Impressao.receberMensagemImpressao = receberMensagemImpressao

  for (const tipo in metodosParaDesativar) {
    metodosParaDesativar[tipo].forEach(metodo => {
      Impressao.disableRemoteMethodByName(metodo)
    })
  }
}
