import { checarTagVirtualParaCriacao } from '../checarTagVirtualParaCriacao'
import { criarTag } from '../criarTag'

jest.mock('../criarTag', () => ({
  criarTag: jest.fn(async callback => callback()),
}))

const getDicionarioTagsCriadas = () => ({})

const getUsuarioAtual = () => ({})

const getCallback = () => jest.fn()

const getTagVirtual = () => ({
  isNew: true,
})

describe('checarTagVirtualParaCriacao', () => {
  test('Se tagVirtual for nova e aindan não tiver sido criada, rodar criarTag', () => {
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    const usuarioAtual = getUsuarioAtual()
    const callback = getCallback()
    const tagVirtual = getTagVirtual()
    checarTagVirtualParaCriacao({
      dicionarioTagsCriadas,
      usuarioAtual,
      callback,
    })(tagVirtual)
    expect(criarTag).toHaveBeenCalledTimes(1)
  })
  test('Se tagVirtual for não for nova, não rodar criarTag', () => {
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    const usuarioAtual = getUsuarioAtual()
    const callback = getCallback()
    const tagVirtual = getTagVirtual()
    tagVirtual.isNew = false
    checarTagVirtualParaCriacao({
      dicionarioTagsCriadas,
      usuarioAtual,
      callback,
    })(tagVirtual)
    expect(criarTag).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
