import { filterProps } from 'entidades/filterProps'

import { atributosNaoContidosEmCadernoNoConcurso } from './atributosNaoContidosEmCadernoNoConcurso'
import { atributosEspecificosParaCadernoEmConcurso } from './atributosEspecificosParaCadernoEmConcurso'

import { contratoCaderno } from '../contratoCaderno'

const atributosComuns = filterProps({
  exclude: atributosNaoContidosEmCadernoNoConcurso,
})(contratoCaderno)

export const contratoCadernoDoConcurso = {
  ...atributosComuns,
  ...atributosEspecificosParaCadernoEmConcurso,
}
