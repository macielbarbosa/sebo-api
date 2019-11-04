import { errorCodes } from 'entidades/errorCodes'
import { validarDificuldade } from './validarDificuldade'

export const contratoSelecaoAutomaticaQuestoes = {
  quantidadeDeQuestoes: {
    required: true,
    type: 'number',
    validar: (valor, validacao) =>
      valor < 1 &&
      validacao.addErro({
        code: errorCodes.tipo,
        message: `O valor 'quantidadeDeQuestoes' deve ser maior que 0`,
      }),
  },
  questoesSelecionadas: {
    type: 'array',
  },

  dificuldade: {
    type: 'number',
    validar: validarDificuldade,
  },
  anoEscolar: {
    type: 'enum',
    enum: [
      'Ensino superior: basico',
      'Ensino superior: avancado',
      '3o ano do ensino medio',
      '2o ano do ensino medio',
      '1o ano do ensino medio',
      'Ensino fundamental II',
      'Ensino fundamental I',
    ],
  },
  tipo: {},
}
