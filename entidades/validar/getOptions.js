export const getOptions = params => {
  let checkRequired, strict, isTopLevel
  if (typeof params === 'object' && params) {
    checkRequired = typeof params.checkRequired === 'boolean' ? params.checkRequired : true
    strict = typeof params.strict === 'boolean' ? params.strict : true
    isTopLevel = typeof params.isTopLevel === 'boolean' ? params.isTopLevel : false
  } else {
    checkRequired = true
    strict = true
    isTopLevel = false
  }
  return { checkRequired, strict, isTopLevel }
}
