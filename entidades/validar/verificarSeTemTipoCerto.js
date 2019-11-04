const isIsoDateStringValid = value => {
  try {
    new Date(value).toISOString()
    return typeof value === 'string'
  } catch (error) {
    return false
  }
}

export const verificarSeTemTipoCerto = ({ type, prop }) => {
  if (prop === undefined || prop === null) return true
  switch (type) {
    case undefined:
      return true
    case 'array':
      return Array.isArray(prop)
    case 'literal':
      return true
    case 'enum':
      return true
    case 'ISODateString':
      return isIsoDateStringValid(prop)
    case 'polymorphic':
      return typeof prop === 'object'
    default:
      return typeof prop === type
  }
}
