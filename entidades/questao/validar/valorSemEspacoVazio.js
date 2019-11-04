/**
 * Detectar valor vazio
 * @param {string} valor
 */
export const valorSemEspacoVazio = valor => {
  if (valor)
    return valor
      .trim()
      .split(new RegExp('\\s'))
      .join('')
  return undefined
}
