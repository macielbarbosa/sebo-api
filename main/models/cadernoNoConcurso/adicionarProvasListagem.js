import { adicionarProvasEmCaderno } from './adicionarProvasEmCaderno'

export const adicionarProvasListagem = (contexto, instance, callback) => {
  try {
    const todasProvas = contexto.instance.provas
    contexto.result.forEach(adicionarProvasEmCaderno(todasProvas))
  } catch (error) {
    console.log('adicionarProvasListagem')
    console.log(error)
  }
  callback()
}
