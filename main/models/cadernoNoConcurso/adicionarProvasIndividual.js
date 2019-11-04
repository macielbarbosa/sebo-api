import { adicionarProvasEmCaderno } from './adicionarProvasEmCaderno'

export const adicionarProvasIndividual = (contexto, instance, callback) => {
  try {
    const todasProvas = contexto.instance.provas
    if (contexto.result) adicionarProvasEmCaderno(todasProvas)(contexto.result)
  } catch (error) {
    console.log('adicionarProvasIndividual')
    console.log(error)
  }
  callback()
}
