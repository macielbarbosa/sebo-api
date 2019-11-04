import { errorCodes } from 'entidades/errorCodes'

const pertenceAoEnum = (objetoParaValidar, enumPassado) => {
  let pertence = false
  Object.keys(enumPassado).forEach(key => {
    if (JSON.stringify(enumPassado[key]) === JSON.stringify(objetoParaValidar)) pertence = true
  })
  return pertence
}

export const validarComEnum = enumPassado => objetoParaValidar => {
  const erros = []
  let sucesso = true
  if (!pertenceAoEnum(objetoParaValidar, enumPassado)) {
    sucesso = false
    erros.push({
      code: errorCodes.tipo,
      message: `Tipo de objeto inválido para o enum ${JSON.stringify(enumPassado)}, tipos válidos: ${JSON.stringify(
        enumPassado
      )}`,
    })
  }
  return { sucesso, erros }
}
