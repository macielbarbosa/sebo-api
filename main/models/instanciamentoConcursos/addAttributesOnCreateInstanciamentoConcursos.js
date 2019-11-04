export const addAttributesOnCreateInstanciamentoConcursos = async context => {
  const concurso = context.req.body
  concurso.dataCadastro = new Date().toISOString()
}
