import { validar } from 'entidades/validar'
import { filterProps } from 'entidades/filterProps'
import { contratoProvaDoConcurso, contratoProvaDoConcursoEmChamadas } from 'entidades/prova/provaNoConcurso'
import { contratoCadernoDoConcurso, contratoCadernoDoConcursoEmChamadas } from 'entidades/caderno/cadernoNoConcurso'

import { contratoConcurso } from './contratoConcurso'
import { contratoCargo } from './contratoCargo'
import { contratoEtapa } from './contratoEtapa'

export const concurso = {
  validar: validar(contratoConcurso),
  prova: {
    validar: {
      create: validar(contratoProvaDoConcursoEmChamadas),
      edit: validar(contratoProvaDoConcursoEmChamadas, { checkRequired: false }),
      save: validar(contratoProvaDoConcurso),
    },
  },
  caderno: {
    validar: {
      edit: validar(contratoCadernoDoConcursoEmChamadas, { checkRequired: false }),
      save: validar(contratoCadernoDoConcurso),
    },
  },
  cargo: {
    validar: {
      create: validar(filterProps({ exclude: ['id'] })(contratoCargo)),
      edit: validar(contratoCargo, { checkRequired: false }),
      createEtapa: validar(contratoEtapa),
      editEtapa: validar(contratoEtapa, { checkRequired: false }),
    },
  },
}
