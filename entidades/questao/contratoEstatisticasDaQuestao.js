const required = true

export const getContratoEstatisticasDaQuestao = () => ({
  resumo: {
    type: 'object',
    contrato: {
      acertos: {
        type: 'number',
        required,
      },
      erros: {
        type: 'number',
        required,
      },
      numeroUsos: {
        type: 'number',
        required,
      },
      somaNotasAlunos: {
        type: 'number',
        required,
      },
      somaValorQuestoes: {
        type: 'number',
        required,
      },
      acertos10: {
        type: 'number',
        required,
      },
      erros10: {
        type: 'number',
        required,
      },
      somaNotasAlunos10: {
        type: 'number',
        required,
      },
      somaValorQuestoes10: {
        type: 'number',
        required,
      },
    },
    required,
  },
  usos: {
    type: 'array',
    typeElemento: 'object',
    contratoElemento: {
      idProva: {
        type: 'string',
        required,
      },
      dataProva: {
        required,
      },
      acertos: {
        type: 'number',
        required,
      },
      erros: {
        type: 'number',
        required,
      },
      somaNotasAlunos: {
        type: 'number',
        required,
      },
      somaValorQuestoes: {
        type: 'number',
        required,
      },
    },
    required,
  },
})
