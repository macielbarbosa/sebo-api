import { filterProps } from 'entidades/filterProps'
import { contratoTagsVirtuais as tagsVirtuais } from 'entidades/tag'
import { atributosContidosEmProvaDoConcurso } from './atributosContidosEmProvaDoConcurso'
import { atributosNaoContidosEmProvaNoConcurso } from './atributosNaoContidosEmProvaNoConcurso'
import { atributosNaoContidosEmChamadasDeProvaNoConcurso } from './atributosNaoContidosEmChamadasDeProvaNoConcurso'

import { contratoProva } from '../contratoProva'

const base = filterProps({
  exclude: [...atributosNaoContidosEmProvaNoConcurso, ...atributosNaoContidosEmChamadasDeProvaNoConcurso],
})(contratoProva)

export const contratoProvaDoConcursoEmChamadas = {
  ...base,
  tagsVirtuais,
  ...atributosContidosEmProvaDoConcurso,
}
