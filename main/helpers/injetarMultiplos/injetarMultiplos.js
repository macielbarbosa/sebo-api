import { callbackAoProcessarTodasInstancias } from './callbackAoProcessarTodasInstancias'

export const injetarMultiplosOperationMethods = funcaoDeInjetar => (contexto, callback) => {
  const instancias = [contexto.data]
  injetarMultiplos(funcaoDeInjetar)({}, instancias, callback)
}

export const injetarMultiplos = funcaoDeInjetar => (context, instancias, callback) => {
  const tamanhoQuery = instancias.length
  if (tamanhoQuery > 0) {
    instancias.forEach((instancia, index) =>
      funcaoDeInjetar(context, instancia, callbackAoProcessarTodasInstancias(index, tamanhoQuery, callback))
    )
  } else callback()
}
