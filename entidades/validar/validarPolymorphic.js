import { errorCodes } from 'entidades/errorCodes'
import { getOptionsInterna } from './getOptionsInterna'

const getDadosType = ({ key, selector, dadosDoCampo }) => {
  if (selector) {
    return selector(dadosDoCampo)
  } else if (key) {
    return dadosDoCampo[key]
  } else {
    throw new Error(
      `Um campo de tipo "polymorphic" deve ter propriedade "polymorphic" contendo um função selector 
      ou uma "key" para identificar o contrato .`
    )
  }
}

export const validarPolymorphic = ({ contrato, dados, validacao, contratoKey, validar, options, dataKey }) => {
  const contratoDoCampo = contrato[contratoKey]
  const dadosDoCampo = dados[dataKey]
  if (contratoDoCampo.type === 'polymorphic' && dadosDoCampo && typeof dadosDoCampo === 'object') {
    const { polymorphic } = contratoDoCampo
    const { key, contratos, selector } = polymorphic
    const dadosType = getDadosType({ key, selector, dadosDoCampo })
    const dadosContrato = contratos[dadosType]
    if (dadosContrato) {
      const optionsInterna = getOptionsInterna(options)
      const validacaoContratoInterno = validar(dadosContrato, optionsInterna)(dadosDoCampo)
      if (!validacaoContratoInterno.sucesso) {
        if (options.isTopLevel) validacao.erros = validacaoContratoInterno.erros
        else validacao.addErro(contratoKey, validacaoContratoInterno.erros)
      }
    } else {
      validacao.addErro(contratoKey, {
        code: errorCodes.tipo,
        message: `Contrato não encontrado para esse tipo polimórfico. Esperado um desses: ${JSON.stringify(
          Object.keys(contratos)
        )}. Recebeu: ${dadosType}`,
      })
    }
  }
}
