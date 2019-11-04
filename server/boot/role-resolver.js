module.exports = function(app) {
  var Role = app.models.Role

  Role.registerResolver('$candidatoEoMesmoDoArgumento', function(role, context, cb) {
    if (context.modelName !== 'Instanciamento') {
      return process.nextTick(() => cb(null, false))
    }
    var userId = context.accessToken.userId
    if (!userId) {
      return process.nextTick(() => cb(null, false))
    }
    if (context.remotingContext.args.candidatoId === userId) {
      return cb(null, true)
    }
    return process.nextTick(() => cb(null, false))
  })
  Role.registerResolver('$pertenceAoCandidato', function(role, context, cb) {
    if (context.modelName !== 'Instanciamento') {
      return process.nextTick(() => cb(null, false))
    }
    var userId = context.accessToken.userId
    if (!userId) {
      return process.nextTick(() => cb(null, false))
    }
    context.model.findById(context.modelId, function(err, instancia) {
      if (err) return cb(err)
      let erro = new Error('Instancia não existe')
      erro.statusCode = 404
      if (!instancia) return cb(erro)

      if (instancia.candidatoId !== userId) {
        return cb(null, false)
      }

      return cb(null, true)
    })
  })

  Role.registerResolver('$candidatoPodeResponder', function(role, context, cb) {
    if (context.modelName !== 'Instanciamento') {
      return process.nextTick(() => cb(null, false))
    }
    var userId = context.accessToken.userId
    if (!userId) {
      return process.nextTick(() => cb(null, false))
    }
    context.model.findById(context.modelId, function(err, instanciamento) {
      if (err) return cb(err)
      if (!instanciamento) return cb(null, new Error('Instanciamento não encontrado'))
      if (instanciamento.candidatoId === userId) return cb(null, true)
      else return cb(null, false)
    })
  })
}
