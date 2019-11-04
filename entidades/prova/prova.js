import { validar } from 'entidades/validar'
import { deletarPropsNaoPertencentesAoContrato } from 'entidades/deletarPropsNaoPertencentesAoContrato'
import { unsetAttributesNaoPertencesAoContrato } from 'entidades/unsetAttributesNaoPertencesAoContrato'
import { getCamposAuto } from 'entidades/getCamposAuto'
import { contratoProva } from './contratoProva'
import { provaAutoUpdate } from './provaAutoUpdate'
import { provaAutoCreate } from './provaAutoCreate'

export const prova = {
  validar: validar(contratoProva),
  getCamposAuto: {
    create: getCamposAuto(provaAutoCreate),
    update: getCamposAuto(provaAutoUpdate),
  },
  deletarPropsExtras: deletarPropsNaoPertencentesAoContrato(contratoProva),
  unsetAttributesExtras: unsetAttributesNaoPertencesAoContrato(contratoProva),
}
