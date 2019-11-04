import { ValidationError } from 'main/erros/ValidationError'

export default Model => {
  Model.defineProperty('ocultoLixeira', {
    type: Boolean,
    required: true,
    default: false,
  })

  Model.lixeira = (filter = {}, { accessToken }, cb) => {
    const usuarioId = accessToken.userId
    Model.find(
      {
        ...filter,
        where: {
          ...filter.where,
          usuarioId,
          isDeleted: true,
          ocultoLixeira: false,
        },
      },
      (err, itens) => {
        if (err) cb(err)
        cb(null, itens)
      }
    )
  }

  Model.lixeiraCount = (include = {}, where = {}, { accessToken }, cb) => {
    const usuarioId = accessToken.userId
    Model.find(
      {
        include,
        where: {
          ...where,
          usuarioId,
          isDeleted: true,
          ocultoLixeira: false,
        },
      },
      (err, itens) => {
        if (err) cb(err)
        cb(null, itens.length)
      }
    )
  }

  Model.lixeiraRestaurar = (id, { accessToken }, cb) => {
    const usuarioId = accessToken.userId
    Model.updateAll(
      { id, usuarioId, isDeleted: true, ocultoLixeira: false },
      { isDeleted: false },
      (err, info) => {
        if (err) cb(err)
        if (info.count === 0) cb(new ValidationError())
        else cb(null, info)
      }
    )
  }

  Model.lixeiraRemover = (id, { accessToken }, cb) => {
    const usuarioId = accessToken.userId
    Model.updateAll(
      { id, usuarioId, isDeleted: true, ocultoLixeira: false },
      { ocultoLixeira: true },
      (err, info) => {
        if (err) cb(err)
        if (info.count === 0) cb(new ValidationError())
        else cb(null, info)
      }
    )
  }

  Model.remoteMethod('lixeira', {
    accepts: [
      { arg: 'filter', type: 'object' },
      { arg: 'options', type: 'object', http: 'optionsFromRequest' },
    ],
    returns: { type: 'array', root: true },
    http: { verb: 'GET', path: '/lixeira' },
    description: `Obtem os itens da lixeira de ${Model.settings.plural}`,
  })

  Model.remoteMethod('lixeiraCount', {
    accepts: [
      { arg: 'include', type: 'object' },
      { arg: 'where', type: 'object' },
      { arg: 'options', type: 'object', http: 'optionsFromRequest' },
    ],
    returns: { arg: 'count', type: 'number' },
    http: { verb: 'GET', path: '/lixeira/count' },
    description: 'Obtem quantidade de itens da lixeira',
  })

  Model.remoteMethod('lixeiraRestaurar', {
    accepts: [
      { arg: 'id', type: 'string', required: true },
      { arg: 'options', type: 'object', http: 'optionsFromRequest' },
    ],
    returns: { type: 'object', root: true },
    http: { verb: 'POST', path: '/lixeira/restaurar/:id' },
    description: 'Recupera da lixeira o item com o {id}',
  })

  Model.remoteMethod('lixeiraRemover', {
    accepts: [
      { arg: 'id', type: 'string', required: true },
      { arg: 'options', type: 'object', http: 'optionsFromRequest' },
    ],
    returns: { type: 'object', root: true },
    http: { verb: 'DELETE', path: '/lixeira/:id' },
    description: 'Remove da lixeira o item com o {id}',
  })

  const getACLs = (...propertyList) =>
    propertyList.map(property => ({
      accessType: 'EXECUTE',
      principalType: 'ROLE',
      principalId: 'docente',
      permission: 'ALLOW',
      property,
    }))

  Model.settings.acls.push(
    ...getACLs('lixeira', 'lixeiraCount', 'lixeiraRestaurar', 'lixeiraRemover')
  )
}
