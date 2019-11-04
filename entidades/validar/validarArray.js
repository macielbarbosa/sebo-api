import { errorCodes } from 'entidades/errorCodes'
import { verificarSeTemTipoCerto } from './verificarSeTemTipoCerto'

const validaTipoElemento = ({ contrato, validacao, contratoKey, dadosElemento, index }) => {
  const { typeElemento } = contrato[contratoKey]
  if (typeElemento) {
    if (!verificarSeTemTipoCerto({ type: typeElemento, prop: dadosElemento })) {
      validacao.addErro(contratoKey + index, { code: errorCodes.tipo })
    }
  }
}

const validaElementoComFuncao = ({ contrato, validacao, contratoKey, dadosElemento, index }) => {
  const { validarElemento } = contrato[contratoKey]
  if (validarElemento) {
    validacao.key = contratoKey + index
    const validacaoComFuncao = validarElemento(dadosElemento, validacao)
    if (validacaoComFuncao && !validacaoComFuncao.sucesso) {
      validacao.addErros(validacaoComFuncao.erros)
    }
    validacao.key = null
  }
}

const validarContratoElemento = ({ contrato, validacao, contratoKey, index, dadosElemento, validar }) => {
  const { contratoElemento, elemento } = contrato[contratoKey]
  if (elemento) {
    const validacaoElemento = validar(elemento)(dadosElemento)
    if (!validacaoElemento.sucesso) {
      validacao.addErro(contratoKey + index, { code: errorCodes.contrato, details: validacaoElemento.erros })
    }
  } else if (contratoElemento) {
    const validacaoInterna = validar(contratoElemento)(dadosElemento)
    if (!validacaoInterna.sucesso) {
      validacao.addErro(contratoKey + index, { code: errorCodes.contrato, details: validacaoInterna.erros })
    }
  } else if (contratoElemento && typeof dadosElemento !== 'object') {
    throw new Error('Para ter contratoElemento é necessário ser objeto.')
  }
}

const handleValidacoesDoElemento = ({ contrato, validacao, contratoKey, validar }) => (dadosElemento, index) => {
  validaTipoElemento({ contrato, validacao, contratoKey, dadosElemento, index })
  validaElementoComFuncao({ contrato, validacao, contratoKey, dadosElemento, index })
  validarContratoElemento({ contrato, validacao, contratoKey, dadosElemento, index, validar })
}

export const validarArray = ({ contrato, dados, validacao, contratoKey, validar, dataKey }) => {
  const contratoDoCampo = contrato[contratoKey]
  const { type } = contratoDoCampo
  if (type !== 'array') {
    return
  }
  if (dados[dataKey] !== null && dados[dataKey] !== undefined) {
    dados[dataKey].forEach(handleValidacoesDoElemento({ contrato, validacao, contratoKey, validar }))
  }
  return
}
