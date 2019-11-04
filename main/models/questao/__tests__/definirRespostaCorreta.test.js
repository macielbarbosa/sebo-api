
import { definirRespostaCorreta } from '../definirRespostaCorreta'

const questaoAssociacaoEntreColunas = {
  tipo: 'associacaoDeColunas',
  associacaoDeColunas: {
    colunaA: [
      {
        'conteudo': '<p class=\'justify\'>Solido</p>',
        'rotulo': 1,
        'rotuloMatriz': 3,
        'posicaoMatriz': 2,
      },
      {
        'conteudo': '<p class=\'justify\'>Gasoso</p>',
        'rotulo': 2,
        'rotuloMatriz': 2,
        'posicaoMatriz': 1,
      },
      {
        'conteudo': '<p class=\'justify\'>Liquido</p>',
        'rotulo': 3,
        'rotuloMatriz': 1,
        'posicaoMatriz': 0,
      },
    ],
    colunaB: [
      {
        'conteudo': '<p class=\'justify\'>Ar</p>',
        'rotuloMatriz': 2,
        'posicaoMatriz': 0,
      },
      {
        'conteudo': '<p class=\'justify\'>Gelo</p>',
        'rotuloMatriz': 3,
        'posicaoMatriz': 2,
      },
      {
        'conteudo': '<p class=\'justify\'>Agua</p>',
        'rotuloMatriz': 1,
        'posicaoMatriz': 1,
      },
      {
        'conteudo': '<p class=\'justify\'>Metano</p>',
        'rotuloMatriz': 2,
        'posicaoMatriz': 3,
      },
    ],
  },
}

describe('Definir resposta correta', () => {
  it('Calcular rotulo esperado', () => {
    definirRespostaCorreta(questaoAssociacaoEntreColunas)
    expect(questaoAssociacaoEntreColunas.associacaoDeColunas.colunaB[0].rotuloEsperado).not.toBeUndefined()
    expect(questaoAssociacaoEntreColunas.associacaoDeColunas.colunaB[1].rotuloEsperado).not.toBeUndefined()
    expect(questaoAssociacaoEntreColunas.associacaoDeColunas.colunaB[2].rotuloEsperado).not.toBeUndefined()
    expect(questaoAssociacaoEntreColunas.associacaoDeColunas.colunaB[3].rotuloEsperado).not.toBeUndefined()
  })
})