export const filterEmbedsMany = (contexto, instance, callback) => {
  try {
    if (contexto.req.query && contexto.req.query.filter) {
      let { limit, skip } = JSON.parse(contexto.req.query.filter)
      if (!skip) skip = 0
      if (!limit) limit = contexto.result.length
      contexto.result = contexto.result.slice(skip, skip + limit)
    }
  } catch (error) {
    console.log('filterEmbedsMany')
    console.log(error)
  }
  callback()
}
