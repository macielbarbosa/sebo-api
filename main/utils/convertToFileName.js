export const convertToFileName = string =>
  string
    .toLowerCase()
    .replace(/ /g, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\//g, '-')
    .replace(/\\/g, '-')
    .substring(0, 250)
