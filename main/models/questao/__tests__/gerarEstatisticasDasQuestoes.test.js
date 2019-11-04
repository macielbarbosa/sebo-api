import { gerarEstatisticasDaQuestao } from '../gerarEstatisticasDasQuestoes'
import { questaoMatriz } from '../__mocks__/questaoMatriz'
import { questaoInstancia } from '../__mocks__/questaoInstancia'
import { estatisticas } from '../__mocks__/estatisticas'

jest.mock('server/server', () => ({
  models: {
    Questao: {
      find: jest.fn(),
    },
  },
}))

const idProva = 'e79533c6-76cc-4e1b-9f58-f13f592f4e6f'
const dataProva = '2019-08-02T00:00:00.342Z'

describe('testando geração de estatisticas de questão', () => {
  test('Retorno do json estatisticas', () => {
    const retornoEstatistica = gerarEstatisticasDaQuestao({
      questaoMatriz,
      questao: questaoInstancia,
      idProva,
      dataProva,
    })
    expect(retornoEstatistica.resumo).toEqual(estatisticas.resumo)

    const retornoUso = retornoEstatistica.usos
    const uso = retornoEstatistica.usos
    expect(retornoUso.length).toEqual(uso.length)
  })
})
