import { converterTagVirtualEmTagId } from '../converterTagVirtualEmTagId'

const getDicionarioTagsCriadas = () => ({
  id: 'dicioId',
})

const getTagVirtual = () => ({
  id: 'id',
  nome: 'nome',
  isNew: true,
})

describe('converterTagVirtualEmTagId', () => {
  test('Se for nova, pegar seu id do dicionario', () => {
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    const tagVirtual = getTagVirtual()
    const tagId = converterTagVirtualEmTagId(dicionarioTagsCriadas)(tagVirtual)
    expect(tagId).toEqual('dicioId')
  })
  test('Se for não for nova, pegar seu id', () => {
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    const tagVirtual = getTagVirtual()
    tagVirtual.isNew = false
    const tagId = converterTagVirtualEmTagId(dicionarioTagsCriadas)(tagVirtual)
    expect(tagId).toEqual('id')
  })
})
