export const contratoEstatisticasProva = {
  gerais: {
    type: 'object',
    contrato: {
      media: {
        type: 'number',
      },
      desvioPadrao: {
        type: 'number',
      },
      numeroParticipantes: {
        type: 'number',
      },
      numeroProvasRespondidas: {
        type: 'number',
      },
    },
  },
  histogramaNotas: {
    type: 'array',
    typeElemento: 'object',
    contratoElemento: {
      faixa: {
        type: 'string',
      },
      quantidade: {
        type: 'number',
      },
    },
  },
  acertosQuestao: {
    type: 'array',
    typeElemento: 'object',
    contratoElemento: {
      indice: {
        type: 'number',
      },
      questao: {
        type: 'number',
      },
    },
  },
  graficosPorQuestao: {
    type: 'array',
    typeElemento: 'object',
    contratoElemento: {
      questao: {
        type: 'number',
      },
      tipo: {
        required: true,
        type: 'string',
      },
      marcacoes: {
        type: 'array',
        typeElemento: 'object',
        contratoElemento: {
          type: 'object',
          contrato: {
            f: { type: 'number' },
            v: { type: 'number' },
            quantidade: { type: 'number' },
            letra: { type: 'string' },
            resposta: { type: 'string' },
            afirmacao: { type: 'number' },
          },
        },
      },
      colunaB: {
        type: 'array',
        typeElemento: 'object',
        contratoElemento: {
          rotulo: {
            type: 'number',
          },
          rotuloResposta: {
            type: 'number',
          },
          colunaA: {
            type: 'array',
            typeElemento: 'object',
            contratoElemento: {
              rotulo: {
                type: 'number',
              },
              quantidade: {
                type: 'number',
              },
            },
          },
        },
      },
    },
  },
}
