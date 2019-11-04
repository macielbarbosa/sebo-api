import { validarContratoOnSave, addDataUltimaAlteracaoOnSave, composeAsync } from 'main/helpers'

import { contratoCadernoDoConcurso } from 'entidades/caderno/cadernoNoConcurso'

export default CadernoDoConcurso => {
  CadernoDoConcurso.observe(
    'before save',
    composeAsync([addDataUltimaAlteracaoOnSave, validarContratoOnSave(contratoCadernoDoConcurso)])
  )
}
