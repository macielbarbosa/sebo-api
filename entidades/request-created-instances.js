import { contratosQuestaoInstanciamento } from 'entidades/questao/questaoInstanciamento'
import { contratoProvaInstanciamentoTopLevel } from 'entidades/prova/provaInstanciamento'
import {
  contratoCadernoInstanciamentoTopLevel,
  contratoCadernoConcursoInstanciamento,
} from 'entidades/caderno/cadernoInstanciamento'

import { enumTiposDadosInstanciamento } from './enumTiposDadosInstanciamento'
import { contratoOperacao } from './operacoesInstanciamento'

const required = true

export const contratosTipos = {
  [enumTiposDadosInstanciamento.caderno]: contratoCadernoInstanciamentoTopLevel,
  [enumTiposDadosInstanciamento.cadernoConcurso]: contratoCadernoConcursoInstanciamento,
  [enumTiposDadosInstanciamento.prova]: contratoProvaInstanciamentoTopLevel,
  ...contratosQuestaoInstanciamento,
}

export const tipos = Object.keys(contratosTipos)

export const contratoMensagem = {
  id: { type: 'string', required },
  operacao: contratoOperacao,
  dados: { type: 'polymorphic', polymorphic: { key: 'tipo', contratos: contratosTipos }, required },
}
