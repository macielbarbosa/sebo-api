import { filterProps } from 'entidades/filterProps'

import { contratoCaderno } from 'entidades/caderno/contratoCaderno'
import { contratoConcurso } from './contratoConcurso'

const atributosComunsComCaderno = ['titulo', 'fraseDeRodape', 'cabecalho', 'instrucoes']

export const contratoCapa = Object.freeze({
  ...filterProps({ include: atributosComunsComCaderno })(contratoCaderno),
  template: contratoConcurso.opcoes.contrato.template,
})
