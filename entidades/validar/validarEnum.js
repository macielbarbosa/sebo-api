import { errorCodes } from 'entidades/errorCodes'

const getEnum = enumDoCampo => {
  if (Array.isArray(enumDoCampo)) return enumDoCampo
  else if (typeof enumDoCampo === 'object') return Object.keys(enumDoCampo).map(key => enumDoCampo[key])
  else throw new Error(`Contrato com type "enum", deve ser uma propriedade "enum" que é um array ou object.`)
}

export const validarEnum = ({ contrato, dados, validacao, contratoKey, dataKey }) => {
  const contratoDoCampo = contrato[contratoKey]
  const dadosDoCampo = dados[dataKey]
  const campoTemDados = dadosDoCampo !== null && dadosDoCampo !== undefined && dadosDoCampo !== ''
  if (contratoDoCampo.type === 'enum' && campoTemDados) {
    const enumDoCampo = getEnum(contratoDoCampo.enum)
    if (enumDoCampo.every(value => JSON.stringify(value) !== JSON.stringify(dadosDoCampo))) {
      validacao.addErro(contratoKey, {
        code: errorCodes.tipo,
        message: `Valores possíveis: ${JSON.stringify(enumDoCampo)}. Recebeu: ${JSON.stringify(dadosDoCampo)}`,
      })
    }
  }
}
