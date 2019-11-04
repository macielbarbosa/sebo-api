export const getDados = contexto => {
  if (contexto.data) return contexto.data
  else if (contexto.instance) return contexto.instance
  else return null
}
