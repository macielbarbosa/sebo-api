export const getCountConfig = name => ({
  accepts: {
    arg: 'instancia',
    type: 'object',
  },
  returns: {
    arg: 'count',
    type: 'number',
  },
  description: `Contar ${name} do concurso porque não o count do loopback não funciona para embeds.`,
  http: {
    verb: 'get',
    path: `/${name}/count-embed`,
  },
})

export const questoesListCount = (instancia, callback) => callback(null, instancia.questoesList.value().length)

export const provasListCount = (instancia, callback) => callback(null, instancia.provasList.value().length)

export const cadernosListCount = (instancia, callback) => callback(null, instancia.cadernosList.value().length)
