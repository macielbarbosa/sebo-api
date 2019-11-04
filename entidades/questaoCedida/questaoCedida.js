import { validar } from 'entidades/validar'
import { deletarPropsNaoPertencentesAoContrato } from 'entidades/deletarPropsNaoPertencentesAoContrato'
import { unsetAttributesNaoPertencesAoContrato } from 'entidades/unsetAttributesNaoPertencesAoContrato'
// import { getCamposAuto } from 'entidades/getCamposAuto'

import { contratoQuestaoCedida } from './contratoQuestaoCedida'

export const questaoCedida = {
  validar: validar(contratoQuestaoCedida),

  deletarPropsExtras: deletarPropsNaoPertencentesAoContrato(contratoQuestaoCedida),
  unsetAttributesExtras: unsetAttributesNaoPertencesAoContrato(contratoQuestaoCedida),
}
