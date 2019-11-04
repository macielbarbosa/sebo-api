import { errorCodes } from 'entidades/errorCodes'

export const validarLiteral = ({ contrato, dados, validacao, contratoKey, dataKey }) => {
  const contratoDoCampo = contrato[contratoKey]
  if (contratoDoCampo.type === 'literal') {
    const { literal } = contratoDoCampo
    const dadosDoCampo = dados[dataKey]
    if (literal !== dadosDoCampo) {
      validacao.addErro(contratoKey, {
        code: errorCodes.literal,
        message: `Esperado literal: ${literal}. Recebeu: ${dadosDoCampo}`,
      })
    }
  }
}
