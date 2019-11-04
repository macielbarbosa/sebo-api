export const callbackAoProcessarTodasInstancias = (index, tamanhoQuery, callback) => erro => {
  if (index + 1 === tamanhoQuery) callback()
  else if (index + 1 > tamanhoQuery)
    throw new Error(
      `Na injeção de campos em vários instâncias, o número de callbacks foi
      maior que o número de instânciass na query.`
    )
}
