import { processarTagsVirtuais } from '../processarTagsVirtuais'

import { criarTagsNovas } from '../criarTagsNovas'
import { converterTagsVirtuaisEmTagIds } from '../converterTagsVirtuaisEmTagIds'

jest.mock('../criarTagsNovas', () => ({
  criarTagsNovas: jest.fn(),
}))

jest.mock('../converterTagsVirtuaisEmTagIds', () => ({
  converterTagsVirtuaisEmTagIds: jest.fn(),
}))

describe('processarTagsVirtuais', () => {
  test('Chama criarTagsNovas e depois conveterTagsVirtuaisEmTagIds', async () => {
    await processarTagsVirtuais({
      dicionarioTagsCriadas: {},
      tagsVirtuais: {},
      usuarioAtual: {},
    })
    expect(criarTagsNovas).toHaveBeenCalledTimes(1)
    expect(converterTagsVirtuaisEmTagIds).toHaveBeenCalledTimes(1)
  })
})
