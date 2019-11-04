import { validarQuestao } from '../validarQuestao'
import { questaoMultiplaEscolhaValida } from '../__mocks__/questaoMultiplaEscolhaValida'
import { questaoBlocoValida } from '../__mocks__/questaoBlocoValida'

describe('validarQuetao', () => {
  describe('multiplaEscolha', () => {
    test('sucesso', () => {
      const validacao = validarQuestao(questaoMultiplaEscolhaValida, true)
      expect(validacao.sucesso).toBeTruthy()
    })
    test('falha dataCadastro', () => {
      const questao = { ...questaoMultiplaEscolhaValida }
      delete questao.dataCadastro
      let validacao = validarQuestao(questao, true)
      expect(validacao.sucesso).toBeFalsy()
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeTruthy()
    })
    test('falha dataUltimaAlteracao', () => {
      const questao = { ...questaoMultiplaEscolhaValida }
      delete questao.dataUltimaAlteracao
      let validacao = validarQuestao(questao, true)
      expect(validacao.sucesso).toBeFalsy()
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeTruthy()
    })
    test('falha enunciado', () => {
      const questao = { ...questaoMultiplaEscolhaValida }
      delete questao.enunciado
      let validacao = validarQuestao(questao, true)
      expect(validacao.sucesso).toBeFalsy()
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeTruthy()
    })
    test('falha multiplaEscolha', () => {
      let questao = { ...questaoMultiplaEscolhaValida }
      delete questao.multiplaEscolha
      let validacao = validarQuestao(questao, true)
      expect(validacao.sucesso).toBeFalsy()
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeTruthy()
    })
    test('falha multiplaEscolha respostaCerta', () => {
      let questao = { ...questaoMultiplaEscolhaValida }
      delete questao.multiplaEscolha.respostaCerta
      let validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
    })
    test('falha multiplaEscolha respostaCerta', () => {
      let questao = { ...questaoMultiplaEscolhaValida }
      delete questao.multiplaEscolha.alternativas
      let validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
      questao = { ...questaoMultiplaEscolhaValida }
      questao.multiplaEscolha.alternativas = ''
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
    })
    test('falha dificuldade:', () => {
      let questao = { ...questaoMultiplaEscolhaValida }
      delete questao.dificuldade
      let validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
      questao = { ...questaoMultiplaEscolhaValida }
      questao.dificuldade = ''
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
      questao = { ...questaoMultiplaEscolhaValida }
      questao.dificuldade = 0
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
      questao = { ...questaoMultiplaEscolhaValida }
      questao.dificuldade = 4
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
    })
    test('falha tipo:', () => {
      let questao = { ...questaoMultiplaEscolhaValida }
      delete questao.tipo
      let validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
      questao = { ...questaoMultiplaEscolhaValida }
      questao.dificuldade = 'block'
      validacao = validarQuestao(questao)
      expect(validacao.sucesso).toBeFalsy()
    })
  })
})

describe('questaoBlocoValida', () => {
  test('sucesso', () => {
    const validacao = validarQuestao(questaoBlocoValida, true)
    expect(validacao.sucesso).toBeTruthy()
  })
  test('falha dataCadastro', () => {
    const questao = { ...questaoBlocoValida }
    delete questao.dataCadastro
    let validacao = validarQuestao(questao, true)
    expect(validacao.sucesso).toBeFalsy()
    validacao = validarQuestao(questao)
    expect(validacao.sucesso).toBeTruthy()
  })
  test('falha dataUltimaAlteracao', () => {
    const questao = { ...questaoBlocoValida }
    delete questao.dataUltimaAlteracao
    let validacao = validarQuestao(questao, true)
    expect(validacao.sucesso).toBeFalsy()
    validacao = validarQuestao(questao)
    expect(validacao.sucesso).toBeTruthy()
  })
  test('falha enunciado', () => {
    const questao = { ...questaoBlocoValida }
    delete questao.enunciado
    let validacao = validarQuestao(questao, true)
    expect(validacao.sucesso).toBeTruthy()
    validacao = validarQuestao(questao)
    expect(validacao.sucesso).toBeTruthy()
  })
  test('falha fraseInicial', () => {
    const questao = { ...questaoBlocoValida }
    delete questao.fraseInicial
    let validacao = validarQuestao(questao, true)
    expect(validacao.sucesso).toBeTruthy()
    validacao = validarQuestao(questao)
    expect(validacao.sucesso).toBeTruthy()
  })
  test('falha questoes', () => {
    let questao = { ...questaoBlocoValida }
    delete questao.questoes
    let validacao = validarQuestao(questao, true)
    expect(validacao.sucesso).toBeFalsy()
    validacao = validarQuestao(questao)
    expect(validacao.sucesso).toBeTruthy()
    //
    questao = { ...questaoBlocoValida }
    questao.questoes = ''
    validacao = validarQuestao(questao)
    expect(validacao.sucesso).toBeFalsy()
    //
    questao = { ...questaoBlocoValida }
    questao.questoes = {}
    validacao = validarQuestao(questao)
    expect(validacao.sucesso).toBeFalsy()
    //
    questao = { ...questaoBlocoValida }
    questao.questoes = [{}]
    validacao = validarQuestao(questao)
    expect(validacao.sucesso).toBeFalsy()
  })
})
