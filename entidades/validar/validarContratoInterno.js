import { validar } from './validar'
import { errorCodes } from 'entidades/errorCodes'
import { getOptionsInterna } from './getOptionsInterna'

export const validarContratoInterno = ({ contrato, dados, validacao, contratoKey, options, dataKey }) => {
  if (dados[dataKey] !== null && dados[dataKey] !== undefined) {
    const contratoDoCampo = contrato[contratoKey]
    const { type } = contratoDoCampo
    if (!contratoDoCampo.contrato || type !== 'object' || typeof dados[dataKey] !== 'object') return
    const contratoInterno = contratoDoCampo.contrato
    const optionsInterna = getOptionsInterna(options)
    const validacaoInterna = validar(contratoInterno, optionsInterna)(dados[dataKey])
    if (!validacaoInterna.sucesso) {
      if (options.isTopLevel) validacao.erros = validacaoInterna.erros
      else validacao.addErro(contratoKey, { code: errorCodes.contrato, details: validacaoInterna.erros })
    }
  }
  return
}
