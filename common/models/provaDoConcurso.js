import { composeAsync, validarOnSave, addDataUltimaAlteracaoOnSave, processarTagsOnSave } from 'main/helpers'

import { concurso } from 'entidades'

export default QuestaoDoConcurso => {
  QuestaoDoConcurso.observe(
    'before save',
    composeAsync([addDataUltimaAlteracaoOnSave, processarTagsOnSave, validarOnSave(concurso.prova.validar.save)])
  )
}
