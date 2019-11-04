import { beforeCreatePreset } from '../beforeCreatePreset'

jest.mock('main/erros', () => ({
  ValidationError: Error,
}))

jest.mock('../addAccessTokenEmDados', () => ({
  addAccessTokenEmDados: jest.fn(),
}))

const getEntidade = () => ({
  unsetAttributesExtras: jest.fn(),
  getCamposAuto: {
    create: () => ({
      campoAutomatico: 'campoAutomatico',
      campoAutomatico2: 'campoAutomatico2',
    }),
  },
  validar: () => ({ sucesso: true }),
})

const getContexto = () => ({
  instance: {
    toObject: () => ({ id: 'id' }),
  },
  options: { accessToken: 'accessToken' },
})

describe('beforeCreatePreset', () => {
  test('Chama unsetAttributesExtras de entidade', () => {
    const entidade = getEntidade()
    const contexto = getContexto()
    beforeCreatePreset(entidade, contexto)
    expect(entidade.unsetAttributesExtras).toHaveBeenCalledTimes(1)
  })
  test('Ignora ids envidados', () => {
    const entidade = getEntidade()
    const contexto = getContexto()
    const { id } = contexto.instance.toObject()
    beforeCreatePreset(entidade, contexto)
    expect(contexto.instance.id).not.toEqual(id)
  })
  test('Adiciona campos automáticos', () => {
    const entidade = getEntidade()
    const contexto = getContexto()
    const camposAutomaticos = entidade.getCamposAuto.create()
    beforeCreatePreset(entidade, contexto)
    for (let key in camposAutomaticos) {
      expect(contexto.instance[key]).toEqual(camposAutomaticos[key])
    }
  })
  test('Se validação falhar, throw', () => {
    const entidade = getEntidade()
    entidade.validar = () => ({ sucesso: false })
    const contexto = getContexto()
    expect(() => beforeCreatePreset(entidade, contexto)).toThrow()
  })
})
