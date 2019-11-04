import { validar as validarComContrato } from 'entidades'
import { ValidationError, ForbiddenError } from 'main/erros'

export const validarComThrow = ({ validar, dados, errorType }) => {
  const validacao = validar(dados)
  if (!validacao.sucesso) {
    switch (errorType) {
      case 'ValidationError':
        throw new ValidationError(validacao.erros)
      case 'ForbiddenError':
        throw new ForbiddenError('Validação interna inválida.', validacao.erros)
      case 'Error':
        console.error('Falha em validação interna.')
        console.error(JSON.stringify(validacao.erros))
        throw new Error('Falha em validação interna.')
      default:
        throw new ValidationError(validacao.erros)
    }
  }
}

export const validarContratoComThrow = ({ contrato, dados, options, errorType }) => {
  const validar = validarComContrato(contrato, options)
  validarComThrow({ validar, dados, errorType })
}
