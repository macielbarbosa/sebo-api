import { criarTag } from '../criarTag'

const getTagCriada = () => ({ id: 'idCriado' })

const getUsuarioAtual = () => ({
  tags: { create: (data, func) => func(null, getTagCriada()) },
})

const getUsuarioAtualFalhandoCreate = () => ({
  tags: { create: (data, func) => func({}, getTagCriada()) },
})

const getTagVirtual = () => ({ id: 'idVirtual' })

const getDicionarioTagsCriadas = () => ({})

describe('criarTag', () => {
  test('Se tiver usuarioAtual e o create gerar erro, adiciona id criada no dicionário', feito => {
    const usuarioAtual = getUsuarioAtualFalhandoCreate()
    const tagVirtual = getTagVirtual()
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    criarTag({ usuarioAtual, tagVirtual, dicionarioTagsCriadas }).then(() => {
      expect(dicionarioTagsCriadas.idVirtual).toEqual('idCriado')
      feito()
    })
  })
  test('Se tiver usuarioAtual e o create não gerar erro adiciona id criada no dicionário', feito => {
    const usuarioAtual = getUsuarioAtual()
    const tagVirtual = getTagVirtual()
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    criarTag({ usuarioAtual, tagVirtual, dicionarioTagsCriadas }).then(() => {
      expect(dicionarioTagsCriadas.idVirtual).toEqual('idCriado')
      feito()
    })
  })
  test('Se não tiver usuarioAtual', feito => {
    const usuarioAtual = null
    const tagVirtual = getTagVirtual()
    const dicionarioTagsCriadas = getDicionarioTagsCriadas()
    criarTag({ usuarioAtual, tagVirtual, dicionarioTagsCriadas }).then(() => {
      expect(dicionarioTagsCriadas.idVirtual).toEqual('criando')
      feito()
    })
  })
})
