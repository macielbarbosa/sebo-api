import { substituirTagsVirtuaisPorTagIds } from '../substituirTagsVirtuaisPorTagIds'

jest.mock('../processarTagsVirtuais', () => ({
  processarTagsVirtuais: jest.fn().mockResolvedValue(['tagId']),
}))

describe('substituirTagsVirtuaisPorTagIds', () => {
  test('Apaga tagVirtuais de dados e insere tagids', async () => {
    const dados = { tagsVirtuais: {} }
    const dicionarioTagsCriadas = {}
    const usuarioAtual = {}
    await substituirTagsVirtuaisPorTagIds({
      dados,
      dicionarioTagsCriadas,
      usuarioAtual,
    })
    expect(dados.tagsVirtuais).toBeFalsy()
    expect(dados.tagIds).toEqual(['tagId'])
  })
})
