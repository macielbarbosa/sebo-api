import { propsComunsInstanciamento } from './propsComunsInstanciamento'
import { contratoProvaInstanciada } from './contratoProvaInstanciada'

export const contratoInstanciamentoSave = Object.freeze({
  ...propsComunsInstanciamento,
  prova: contratoProvaInstanciada,
})
