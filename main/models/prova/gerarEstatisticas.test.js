import { gerarEstatisticas, gerarDesvioPadrao } from './gerarEstatisticas'
import { enumStatusInstanciamento } from 'entidades/instanciamento/enumStatusInstanciamento'
import { enumTipoQuestao } from 'entidades/enumTipoQuestao'

const prova = {
  valor: 12,
  dadosAplicacao: {
    tipoAplicacao: 'virtual',
    virtual: {
      dataInicioProva: '2019-12-31T00:00',
      dataTerminoProva: '2019-12-31T23:59',
      duracaoDaProva: 99999,
    },
    participantes: [
      {
        email: 'discente@ufrn.br',
      },
      {
        email: 'discente2@ufrn.br',
      },
    ],
    dataInstanciamento: '2019-08-05T15:56:43.935Z',
  },
}

const instancias = [
  {
    notaProva: 4,
    status: enumStatusInstanciamento.concluida,
    prova: {
      grupos: [
        {
          questoes: [
            {
              valor: 3,
              questaoMatrizId: 'e8037b71-a605-40b4-b791-d2ecc4f8ab80',
              numeroNaMatriz: 2,
              numeroNaInstancia: 1,
              fixa: false,
              enunciado: 'Qual a <b>soma</b>  de 2+2?',
              dificuldade: 2,
              tipo: 'vouf',
              vouf: {
                afirmacoes: [
                  {
                    texto: 'A soma vale 4',
                    posicaoNaMatriz: 0,
                    letra: 'F',
                    respostaCandidato: 'V',
                  },
                  {
                    texto: 'A soma vale 6',
                    posicaoNaMatriz: 2,
                    letra: 'V',
                    respostaCandidato: 'V',
                  },
                  {
                    texto: 'A soma vale 5',
                    posicaoNaMatriz: 1,
                    letra: 'F',
                    respostaCandidato: 'V',
                  },
                ],
              },
            },
            {
              notaQuestao: 1,
              valor: 3,
              questaoMatrizId: 'e8037b71-a605-40b4-b791-d2ecc4f8ab81',
              numeroNaMatriz: 3,
              numeroNaInstancia: 2,
              fixa: false,
              enunciado: 'Qual a <b>soma</b>  de 2+2?',
              dificuldade: 2,
              tipo: 'discursiva',
              discursiva: {
                expectativaDeResposta: 'A soma é 4',
                numeroDeLinhas: 10,
              },
            },
          ],
        },
        {
          questoes: [
            {
              notaQuestao: 2,
              valor: 3,
              questaoMatrizId: 'a67ba4dc-67fa-4698-aaec-700ec2f4f48f',
              numeroNaMatriz: 4,
              numeroNaInstancia: 3,
              fixa: false,
              enunciado: '<p>Qual a cor do cavalo branco de napoleão bonaparte</p>',
              dificuldade: 2,
              tipo: 'multiplaEscolha',
              multiplaEscolha: {
                respostaCerta: 'd',
                alternativas: [
                  { texto: '<p>Branco</p>', letraNaInstancia: 'a', letraNaMatriz: 'c' },
                  { texto: '<p>Azul</p>', letraNaInstancia: 'b', letraNaMatriz: 'd' },
                  { texto: '<p>Preto</p>', letraNaInstancia: 'c', letraNaMatriz: 'b' },
                  { texto: '<p>Pardo</p>', letraNaInstancia: 'd', letraNaMatriz: 'a' },
                ],
                alternativasPorLinha: 1,
                respostaCandidato: 'a',
                dataRespostaCandidato: '2019-02-05T20:12:20.234Z',
              },
            },
            {
              notaQuestao: 1,
              valor: 3,
              questaoMatrizId: 'a67ba4dc-67fa-4698-aaec-700ec2f4f48g',
              numeroNaMatriz: 1,
              numeroNaInstancia: 4,
              fixa: false,
              enunciado: '<p>Associe as colunas</p>',
              dificuldade: 2,
              tipo: 'associacaoDeColunas',
              associacaoDeColunas: {
                colunaA: [
                  {
                    conteudo: '<p>Pronome</p>',
                    rotulo: 1,
                  },
                  {
                    conteudo: '<p>Verbo</p>',
                    rotulo: 2,
                  },
                ],
                colunaB: [
                  {
                    conteudo: '<p>Ele</p>',
                    rotulo: 1,
                    posicaoMatriz: 0,
                    respostaCandidato: 2,
                    rotuloMatriz: 1,
                  },
                  {
                    conteudo: '<p>Ir</p>',
                    rotulo: 2,
                    posicaoMatriz: 1,
                    respostaCandidato: 1,
                    rotuloMatriz: 2,
                  },
                  {
                    conteudo: '<p>Nós</p>',
                    rotulo: 3,
                    posicaoMatriz: 2,
                    respostaCandidato: 2,
                    rotuloMatriz: 1,
                  },
                  {
                    conteudo: '<p>Ter</p>',
                    rotulo: 5,
                    posicaoMatriz: 3,
                    rotuloMatriz: 2,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
  {
    notaProva: 6,
    status: enumStatusInstanciamento.concluida,
    prova: {
      grupos: [
        {
          questoes: [
            {
              notaQuestao: 1,
              valor: 3,
              questaoMatrizId: 'e8037b71-a605-40b4-b791-d2ecc4f8ab81',
              numeroNaMatriz: 3,
              numeroNaInstancia: 2,
              fixa: false,
              enunciado: 'Qual a <b>soma</b>  de 2+2?',
              dificuldade: 2,
              tipo: 'discursiva',
              discursiva: {
                expectativaDeResposta: 'A soma é 4',
                numeroDeLinhas: 10,
              },
            },
            {
              notaQuestao: 2,
              valor: 3,
              questaoMatrizId: 'e8037b71-a605-40b4-b791-d2ecc4f8ab80',
              numeroNaMatriz: 2,
              numeroNaInstancia: 1,
              fixa: false,
              enunciado: 'Qual a <b>soma</b>  de 2+2?',
              dificuldade: 2,
              tipo: 'vouf',
              vouf: {
                afirmacoes: [
                  {
                    texto: 'A soma vale 4',
                    posicaoNaMatriz: 0,
                    letra: 'F',
                    respostaCandidato: 'V',
                  },
                  {
                    texto: 'A soma vale 5',
                    posicaoNaMatriz: 1,
                    letra: 'F',
                    respostaCandidato: 'V',
                  },
                  {
                    texto: 'A soma vale 6',
                    posicaoNaMatriz: 2,
                    letra: 'V',
                    respostaCandidato: 'V',
                  },
                ],
              },
            },
          ],
        },
        {
          questoes: [
            {
              notaQuestao: 2,
              valor: 3,
              questaoMatrizId: 'a67ba4dc-67fa-4698-aaec-700ec2f4f48f',
              numeroNaMatriz: 4,
              numeroNaInstancia: 3,
              fixa: false,
              enunciado: '<p>Qual a cor do cavalo branco de napoleão bonaparte</p>',
              dificuldade: 2,
              tipo: 'multiplaEscolha',
              multiplaEscolha: {
                respostaCerta: 'd',
                alternativas: [
                  { texto: '<p>Branco</p>', letraNaInstancia: 'a', letraNaMatriz: 'c' },
                  { texto: '<p>Azul</p>', letraNaInstancia: 'b', letraNaMatriz: 'd' },
                  { texto: '<p>Preto</p>', letraNaInstancia: 'c', letraNaMatriz: 'b' },
                  { texto: '<p>Pardo</p>', letraNaInstancia: 'd', letraNaMatriz: 'a' },
                ],
                alternativasPorLinha: 1,
                respostaCandidato: 'd',
                dataRespostaCandidato: '2019-02-05T20:12:20.234Z',
              },
            },
            {
              notaQuestao: 1,
              valor: 3,
              questaoMatrizId: 'a67ba4dc-67fa-4698-aaec-700ec2f4f48g',
              numeroNaMatriz: 1,
              numeroNaInstancia: 4,
              fixa: false,
              enunciado: '<p>Associe as colunas</p>',
              dificuldade: 2,
              tipo: 'associacaoDeColunas',
              associacaoDeColunas: {
                colunaA: [
                  {
                    conteudo: '<p>Pronome</p>',
                    rotulo: 1,
                  },
                  {
                    conteudo: '<p>Verbo</p>',
                    rotulo: 2,
                  },
                ],
                colunaB: [
                  {
                    conteudo: '<p>Ele</p>',
                    rotulo: 1,
                    posicaoMatriz: 0,
                    respostaCandidato: 1,
                    rotuloMatriz: 1,
                  },
                  {
                    conteudo: '<p>Ir</p>',
                    rotulo: 2,
                    posicaoMatriz: 1,
                    respostaCandidato: 1,
                    rotuloMatriz: 2,
                  },
                  {
                    conteudo: '<p>Ter</p>',
                    rotulo: 3,
                    posicaoMatriz: 3,
                    respostaCandidato: 2,
                    rotuloMatriz: 2,
                  },
                  {
                    conteudo: '<p>Nós</p>',
                    rotulo: 4,
                    posicaoMatriz: 2,
                    rotuloMatriz: 1,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
]

describe('testando geração de estatistica', () => {
  test('desvio padrão', async () => {
    expect(
      gerarDesvioPadrao({
        media: 15,
        instancias: [{ notaProva: 10 }, { notaProva: 20 }, { notaProva: 12 }, { notaProva: 17 }, { notaProva: 16 }],
      })
    ).toBe(3.5777087639996634)
    expect(
      gerarDesvioPadrao({
        media: 5.645,
        instancias: [{ notaProva: 8.3 }, { notaProva: 4.8 }, { notaProva: 5.78 }, { notaProva: 3.7 }],
      })
    ).toBe(1.700316147073832)
  })
  test('estatisticas', async () => {
    const { gerais, histogramaNotas, graficosPorQuestao, acertosQuestao } = await gerarEstatisticas({
      prova,
      instancias,
    })
    const { numeroParticipantes, numeroProvasRespondidas } = gerais
    //expect(media).toBe(5)
    expect(numeroParticipantes).toBe(2)
    expect(numeroProvasRespondidas).toBe(2)
    //expect(desvioPadrao).toBe(1)
    expect(graficosPorQuestao.length).toBe(3)
    expect(histogramaNotas).toEqual([
      { faixa: '0 - 2,4', quantidade: 0 },
      { faixa: '2,4 - 4,8', quantidade: 1 },
      { faixa: '4,8 - 7,2', quantidade: 1 },
      { faixa: '7,2 - 9,6', quantidade: 0 },
      { faixa: '9,6 - 12', quantidade: 0 },
    ])
    expect(acertosQuestao).toEqual([
      { questao: 1, indice: 0.33 },
      { questao: 2, indice: 0.33 },
      { questao: 3, indice: 0.33 },
      { questao: 4, indice: 0.67 },
    ])
    expect(graficosPorQuestao[0]).toEqual({
      questao: 1,
      tipo: enumTipoQuestao.associacaoDeColunas,
      colunaB: [
        {
          rotuloResposta: 1,
          rotulo: 1,
          colunaA: [{ rotulo: 1, quantidade: 1 }, { rotulo: 2, quantidade: 1 }],
        },
        {
          rotuloResposta: 2,
          rotulo: 2,
          colunaA: [{ rotulo: 1, quantidade: 2 }, { rotulo: 2, quantidade: 0 }],
        },
        {
          rotuloResposta: 1,
          rotulo: 3,
          colunaA: [{ rotulo: 1, quantidade: 0 }, { rotulo: 2, quantidade: 1 }],
        },
        {
          rotuloResposta: 2,
          rotulo: 4,
          colunaA: [{ rotulo: 1, quantidade: 0 }, { rotulo: 2, quantidade: 1 }],
        },
      ],
    })
    expect(graficosPorQuestao[1]).toEqual({
      questao: 2,
      tipo: enumTipoQuestao.vouf,
      marcacoes: [
        { afirmacao: 0, f: 0, v: 2, resposta: 'F' },
        { afirmacao: 1, f: 0, v: 2, resposta: 'F' },
        { afirmacao: 2, f: 0, v: 2, resposta: 'V' },
      ],
    })
    expect(graficosPorQuestao[2]).toEqual({
      questao: 4,
      tipo: enumTipoQuestao.multiplaEscolha,
      marcacoes: [
        { letra: 'a', quantidade: 1 },
        { letra: 'b', quantidade: 0 },
        { letra: 'c', quantidade: 1 },
        { letra: 'd', quantidade: 0 },
      ],
    })
  })
})
