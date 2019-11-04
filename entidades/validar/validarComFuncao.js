export const validarComFuncao = ({ contratoKey, contrato, dados, validacao, checkRequired, dataKey }) => {
  const contratoDoCampo = contrato[contratoKey]
  const { validar } = contratoDoCampo
  if (!contratoDoCampo.validar) return
  const dadosDoCampo = dados[dataKey]
  const campoEstaVazio = dadosDoCampo === null || dadosDoCampo === undefined || dadosDoCampo === ''
  if (campoEstaVazio && !checkRequired) return
  validacao.key = contratoKey
  const validacaoFuncao = validar(dadosDoCampo, validacao)
  if (validacaoFuncao && !validacaoFuncao.sucesso) validacao.addErros(validacaoFuncao.erros)
  validacao.key = null
  return
}
