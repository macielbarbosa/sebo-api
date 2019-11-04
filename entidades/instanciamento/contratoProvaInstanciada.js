import { contratoProva } from 'entidades/prova/contratoProva'
import { validarArrayMaiorQueZero } from 'entidades/validarArrayMaiorQueZero'
import { contratoGrupo } from 'entidades/prova/contratoGrupo'

import { contratoQuestaoMultiplaEscolhaInstanciada } from './contratoQuestaoMultiplaEscolhaInstanciada'
import { contratoQuestaoBlocoInstanciada } from './contratoQuestaoBlocoInstanciada'

const required = true

const { titulo, tema, instituicao, nomeProfessor, tipoEmbaralhamento, dataCadastro } = contratoProva
const { dataUltimaAlteracao, tagIds, valor } = contratoProva

export const contratoProvaInstanciada = {
  titulo,
  tema,
  instituicao,
  nomeProfessor,
  tipoEmbaralhamento,
  idNumero: { type: 'number' },
  nomeCandidato: { type: 'string' },
  matricula: { type: 'string' },
  dataCadastro: { ...dataCadastro, required: false },
  dataUltimaAlteracao: { ...dataUltimaAlteracao, required: false },
  tagIds: { ...tagIds, required: false },
  numeroDeQuestoesNaProva: { type: 'number', required },
  dataAplicacao: {},
  vistaProvaHabilitada: { type: 'boolean', required },
  valor,
  notaProva: { type: 'number' },
  grupos: {
    type: 'array',
    validar: validarArrayMaiorQueZero,
    contratoElemento: {
      id: contratoGrupo.id,
      nome: contratoGrupo.nome,
      paratextoInicial: { type: 'string' },
      paratextoFinal: { type: 'string' },
      numeroDeQuestoesNoGrupo: { type: 'number', required },
      questoes: {
        type: 'array',
        contratoElemento: {
          type: 'polymorphic',
          polymorphic: {
            key: 'tipo',
            contratos: {
              multiplaEscolha: contratoQuestaoMultiplaEscolhaInstanciada,
              bloco: contratoQuestaoBlocoInstanciada,
            },
          },
        },
        required,
      },
    },
    required,
  },
}
