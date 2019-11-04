export const getOptionsInterna = ({ checkRequired, strict, isTopLevel }) =>
  isTopLevel ? { checkRequired, strict } : null
