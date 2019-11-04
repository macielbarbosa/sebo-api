import { enumTipoTemplate } from '../enumTipoTemplate'
import { versaoCaderno } from 'entidades/caderno/versaoCaderno'

const required = true

export const tipos = {
  concurso: 'concurso',
  caderno: 'caderno',
  cadernoConcurso: 'cadernoConcurso',
  prova: 'prova',
  questao: 'questao',
  gabaritosConcurso: 'gabaritosConcurso',
  questaoDeCadernoInstanciado: 'questaoDeCadernoInstanciado',
  capaCaderno: 'capaCaderno',
  imagensQuestoesConcurso: 'imagensQuestoesConcurso',
  imagemQuestaoConcurso: 'imagemQuestaoConcurso',
}

const contratosMetadados = {
  [tipos.concurso]: {
    tipo: { type: 'literal', literal: tipos.concurso, required },
    cadernoId: { type: 'string', required },
    concursoId: { type: 'string', required },
    versao: { type: 'string', required },
  },
  [tipos.caderno]: {
    tipo: { type: 'literal', literal: tipos.caderno },
    cadernoId: { type: 'string', required },
  },
  [tipos.cadernoConcurso]: {
    tipo: { type: 'literal', literal: tipos.cadernoConcurso },
    cadernoId: { type: 'string', required },
    concursoId: { type: 'string', required },
    versaoCaderno,
    versao: { type: 'string', required },
  },
  [tipos.prova]: {
    tipo: { type: 'literal', literal: tipos.prova },
    provaId: { type: 'string', required },
  },
  [tipos.questao]: {
    tipo: { type: 'literal', literal: tipos.questao },
    questaoId: { type: 'string', required },
  },
  [tipos.gabaritosConcurso]: {
    tipo: { type: 'literal', literal: tipos.gabaritosConcurso },
    concursoId: { type: 'string', required },
    versao: { type: 'string', required },
  },
  [tipos.questaoDeCadernoInstanciado]: {
    tipo: { type: 'literal', literal: tipos.questaoDeCadernoInstanciado },
    versaoCadernoId: { type: 'string', required },
    numeroDaQuestao: { type: 'number', required },
  },
  [tipos.capaCaderno]: {
    tipo: { type: 'literal', literal: tipos.capaCaderno },
  },
  [tipos.imagensQuestoesConcurso]: {
    tipo: { type: 'literal', literal: tipos.imagensQuestoesConcurso },
    versao: { type: 'string', required },
    concursoId: { type: 'string', required },
    dadosQuestoes: { type: 'array', required },
  },
  [tipos.imagemQuestaoConcurso]: {
    tipo: { type: 'literal', literal: tipos.imagemQuestaoConcurso },
    versao: { type: 'string', required },
    concursoId: { type: 'string', required },
    impressaoZipId: { type: 'string', required },
  },
}

export const contratoImpressao = {
  id: { type: 'string' },
  dataCadastro: { required },
  dataUltimaAlteracao: { required },
  titulo: { required, type: 'string' },
  extensao: { required, type: 'string' },
  contentType: { required, type: 'string' },
  status: { required, type: 'string' },
  usuarioId: { required, type: 'string' },
  template: { type: 'enum', enum: enumTipoTemplate, required },
  metadados: {
    type: 'polymorphic',
    polymorphic: {
      key: 'tipo',
      contratos: contratosMetadados,
    },
  },
  isDeleted: {},
  deletedAt: {},
}
