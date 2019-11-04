import { errorCodes } from 'entidades/errorCodes'

export const validarStrict = ({ contrato, dados, validacao }) => {
  const contratoKeys = Object.keys(contrato)
  if (!contratoKeys.includes('*'))
    Object.keys(dados).forEach(dadoKey => {
      const temValor = dados[dadoKey] !== null && dados[dadoKey] !== undefined
      if (!contratoKeys.includes(dadoKey) && temValor) {
        validacao.addErro(dadoKey, { code: errorCodes.strict })
      }
    })
}
