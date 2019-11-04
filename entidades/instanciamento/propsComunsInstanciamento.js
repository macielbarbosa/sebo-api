import { validarComEnum } from '../validarComEnum'
import { enumStatusInstanciamento } from './enumStatusInstanciamento'
import { enumInstanciaAplicacao } from '../enumInstanciaAplicacao'
import { contratoEstatisticasProva } from '../contratoEstatisticasProva'

const contratoVirtual = {
  dataInicioProva: { type: 'string' },
  dataTerminoProva: { type: 'string' },
  duracaoDaProva: { type: 'number' },
  dataIniciouResolucao: { type: 'string' },
  dataTerminouResolucao: { type: 'string' },
}

const contratoPapel = {
  dataAplicacao: { type: 'string' },
}

export const propsComunsInstanciamento = {
  id: {
    type: 'string',
  },
  dataCadastro: {
    required: true,
  },
  dataUltimaAlteracao: {
    required: true,
  },
  status: {
    type: 'string',
    required: true,
    validar: validarComEnum(enumStatusInstanciamento),
  },
  candidatoId: {
    type: 'string',
  },
  tipoAplicacao: {
    type: 'string',
  },
  virtual: {
    type: 'object',
    contratoElemento: contratoVirtual,
  },
  papel: {
    type: 'object',
    contratoElemento: contratoPapel,
  },
  tipo: {
    type: 'string',
    validar: validarComEnum(enumInstanciaAplicacao),
  },
  idMatriz: {
    type: 'string',
  },
  isDeleted: {},
  deletedAt: {},
  ocultoLixeira: {},
  usuarioId: {
    type: 'string',
    required: true,
  },
  notasPublicadas: {
    type: 'boolean',
  },
  estatisticas: {
    type: 'object',
    contrato: contratoEstatisticasProva,
  },
}
