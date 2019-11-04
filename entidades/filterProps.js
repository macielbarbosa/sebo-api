export const filterProps = ({ include, exclude }) => data => {
  let filteredData = { ...data }
  if (Array.isArray(include)) {
    const novoComuns = {}
    include.forEach(key => {
      const propData = filteredData[key]
      if (propData !== undefined) novoComuns[key] = propData
      else console.error('Os dados inseridos não tem a propriedade com key: ' + key)
    })
    filteredData = novoComuns
  }
  if (Array.isArray(exclude)) {
    exclude.forEach(key => {
      delete filteredData[key]
    })
  }
  return filteredData
}
