import { beforeUpdatePreset } from '../beforeUpdatePreset'

jest.mock('main/erros', () => ({
  ValidationError: Error,
}))

const getEntidade = () => ({
  deletarPropsExtras: jest.fn(),
  getCamposAuto: {
    update: () => ({
      campoAutomatico: 'campoAutomatico',
      campoAutomatico2: 'campoAutomatico2',
    }),
  },
  validar: () => ({ sucesso: true }),
})

const getContexto = () => ({
  data: {},
  currentInstance: {
    toObject: () => ({ id: 'id' }),
  },
  options: { accessToken: 'accessToken' },
})

describe('beforeUpdatePreset', () => {
  test('Chama deletarPropsExtras de entidade', () => {
    const entidade = getEntidade()
    const contexto = getContexto()
    beforeUpdatePreset(entidade, contexto)
    expect(entidade.deletarPropsExtras).toHaveBeenCalledTimes(1)
  })
  test('Adiciona campos automáticos', () => {
    const entidade = getEntidade()
    const contexto = getContexto()
    const camposAutomaticos = entidade.getCamposAuto.update()
    beforeUpdatePreset(entidade, contexto)
    for (let key in camposAutomaticos) {
      expect(contexto.data[key]).toEqual(camposAutomaticos[key])
    }
  })
  test('Se validação falhar, throw', () => {
    const entidade = getEntidade()
    entidade.validar = () => ({ sucesso: false })
    const contexto = getContexto()
    expect(() => beforeUpdatePreset(entidade, contexto)).toThrow()
  })
})

// import { ValidationError } from 'main/erros'

// export const beforeUpdatePreset = (entidade, contexto) => {
//   const newData = contexto.currentInstance.toObject()
//   Object.assign(newData, contexto.data)
//   entidade.deletarPropsExtras(newData)
//   const camposAuto = entidade.getCamposAuto.update(newData)
//   Object.assign(contexto.data, newData)
//   Object.assign(contexto.data, camposAuto)
//   const validacao = entidade.validar(contexto.data)
//   if (!validacao.sucesso) {
//     throw new ValidationError(validacao.erros)
//   }
// }
