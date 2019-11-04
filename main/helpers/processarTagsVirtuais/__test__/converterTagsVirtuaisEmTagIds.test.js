import { converterTagsVirtuaisEmTagIds } from '../converterTagsVirtuaisEmTagIds'
import { converterTagVirtualEmTagId } from '../converterTagVirtualEmTagId'

jest.mock('../converterTagVirtualEmTagId', () => ({
  converterTagVirtualEmTagId: jest.fn(() => jest.fn()),
}))

const getDicionarioTagsCriadas = () => ({})

const getTagsVirtuais = () => [1, 2, 3, 4]

describe('converterTagsVirtuaisEmTagIds', () => {
  test('Converte todas as tagsVirtuais', () => {
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    const tagsVirtuais = getTagsVirtuais()
    const tagIds = converterTagsVirtuaisEmTagIds({
      dicionarioTagsCriadas,
      tagsVirtuais,
    })
    expect(tagIds.length).toBe(tagsVirtuais.length)
    expect(converterTagVirtualEmTagId).toHaveBeenCalledTimes(1)
  })
})
