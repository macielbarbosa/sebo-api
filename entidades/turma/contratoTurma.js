import { usuarioValidarEmail } from 'entidades/usuario/usuarioValidarEmail'
import { errorCodes } from 'entidades/errorCodes'

const required = true

export const contratoTurma = {
  id: {
    type: 'string',
  },
  usuarioId: {
    type: 'string',
    required,
  },
  dataCadastro: { type: 'ISODateString', required },
  dataUltimaAlteracao: { type: 'ISODateString', required },
  nome: {
    type: 'string',
    required,
  },
  ano: {
    type: 'number',
    required,
  },
  periodo: {
    type: 'number',
    required,
    validar: (valor, validacao) =>
      (valor < 1 || valor > 4) &&
      validacao.addErro({
        code: errorCodes.tipo,
        message: `O valor 'periodo' deve ser entre 1 e 4`,
      }),
  },
  numero: {
    type: 'string',
  },
  metadados: {
    type: 'object',
    contratoElemento: {
      professor: {
        type: 'string',
      },
    },
  },
  alunos: {
    type: 'array',
    typeElemento: 'object',
    contratoElemento: {
      nome: {
        type: 'string',
        required,
      },
      matricula: {
        type: 'number',
        required,
      },
      email: {
        type: 'string',
        validar: usuarioValidarEmail,
        required,
      },
      id: {
        type: 'string',
      },
      validado: {
        type: 'boolean',
      },
    },
  },
  alunosPendentes: {
    type: 'array',
    typeElemento: 'object',
    contratoElemento: {
      matricula: {
        type: 'number',
      },
      email: {
        type: 'string',
      },
    },
  },
  isDeleted: {},
  deletedAt: {},
}
