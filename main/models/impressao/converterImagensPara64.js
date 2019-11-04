import { imagensParaBase64 } from 'main/utils/imagensParaBase64'

export const converterImagensPara64 = dados => {
  dados = Array.isArray(dados) ? [...dados] : { ...dados }
  for (let key in dados) {
    const property = dados[key]
    if (property && typeof property === 'object') {
      dados[key] = converterImagensPara64(property)
    } else if (typeof property === 'string' && property.includes('src="http')) {
      dados[key] = imagensParaBase64(property)
    }
  }
  return dados
}
