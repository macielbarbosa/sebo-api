import { validarContratoOnSave, addDataUltimaAlteracaoOnSave, composeAsync } from 'main/helpers'

import { processarTagsVirtuaisEmQuestao } from 'main/models/questao'
import { contratoQuestaoEmSave } from 'entidades/questao/contratosQuestaoNoConcurso'

export default QuestaoDoConcurso => {
  QuestaoDoConcurso.observe(
    'before save',
    composeAsync([
      processarTagsVirtuaisEmQuestao,
      addDataUltimaAlteracaoOnSave,
      validarContratoOnSave(contratoQuestaoEmSave),
    ])
  )
}
