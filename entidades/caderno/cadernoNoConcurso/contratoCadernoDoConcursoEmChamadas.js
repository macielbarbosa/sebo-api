import { filterProps } from 'entidades/filterProps'

import { atributosNaoContidosEmCadernoNoConcurso } from './atributosNaoContidosEmCadernoNoConcurso'
import { atributosNaoContidosEmChamadasDeCadernoNoConcurso } from './atributosNaoContidosEmChamadasDeCadernoNoConcurso'
import { atributosEspecificosParaCadernoEmConcurso } from './atributosEspecificosParaCadernoEmConcurso'

import { contratoCaderno } from '../contratoCaderno'

const atributosComuns = filterProps({
  exclude: [...atributosNaoContidosEmCadernoNoConcurso, ...atributosNaoContidosEmChamadasDeCadernoNoConcurso],
})(contratoCaderno)

export const contratoCadernoDoConcursoEmChamadas = {
  ...atributosComuns,
  ...atributosEspecificosParaCadernoEmConcurso,
}
