import { filterProps } from 'entidades/filterProps'

import { atributosNaoContidosEmProvaNoConcurso } from './atributosNaoContidosEmProvaNoConcurso'
import { atributosContidosEmProvaDoConcurso } from './atributosContidosEmProvaDoConcurso'
import { contratoProva } from '../contratoProva'

export const contratoProvaDoConcurso = {
  ...filterProps({
    exclude: atributosNaoContidosEmProvaNoConcurso,
  })(contratoProva),
  ...atributosContidosEmProvaDoConcurso,
}
