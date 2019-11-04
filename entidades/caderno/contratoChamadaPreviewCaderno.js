import { validar } from 'entidades/validar'
import { filterProps } from 'entidades/filterProps'

import { contratoChamadaPreviewProva } from 'entidades/prova'

import { contratoCaderno } from './contratoCaderno'

const atributosComunsKeys = [
  'titulo',
  'template',
  'duracao',
  'fraseDeRodape',
  'logoCaderno',
  'logoComperve',
  'instrucoes',
  'cabecalho',
]

const atributosComunsComCaderno = filterProps({ include: atributosComunsKeys })(contratoCaderno)

const contratoProvaEmPreviewCaderno = filterProps({ exclude: ['template'] })(contratoChamadaPreviewProva)

export const contratoChamadaPreviewCaderno = {
  ...atributosComunsComCaderno,
  provas: {
    required: true,
    type: 'array',
    typeElemento: 'object',
    validarElemento: validar(contratoProvaEmPreviewCaderno),
  },
}
