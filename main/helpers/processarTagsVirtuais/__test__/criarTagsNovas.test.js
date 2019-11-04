import { criarTagsNovas } from '../criarTagsNovas'

import { checarTagVirtualParaCriacao } from '../checarTagVirtualParaCriacao'

jest.mock('../checarTagVirtualParaCriacao', () => ({
  checarTagVirtualParaCriacao: jest.fn(
    ({ dicionarioTagsCriadas, usuarioAtual, callback }) => () => callback()
  ),
}))

const getDicionarioTagsCriadas = () => ({})

const getTagsParaProcessar = () => [1, 2, 3]

const getUsuarioAtual = () => ({})

describe('criarTagsNovas', () => {
  test('Se tagParaProcessar não tiver nenhum elemento, ainda resolve', feito => {
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    const tagsParaProcessar = []
    const usuarioAtual = getUsuarioAtual()
    criarTagsNovas({
      dicionarioTagsCriadas,
      tagsParaProcessar,
      usuarioAtual,
    }).then(r => {
      expect(r).toBe(undefined)
      expect(checarTagVirtualParaCriacao).toHaveBeenCalledTimes(1)
      feito()
    })
  })
  test('Se tagParaProcessar tiver elementos, checar cada uma das tags para criação', feito => {
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    const tagsParaProcessar = getTagsParaProcessar()
    const usuarioAtual = getUsuarioAtual()
    criarTagsNovas({
      dicionarioTagsCriadas,
      tagsParaProcessar,
      usuarioAtual,
    }).then(r => {
      expect(r).toBe(undefined)
      expect(checarTagVirtualParaCriacao).toHaveBeenCalledTimes(2)
      feito()
    })
  })
})
