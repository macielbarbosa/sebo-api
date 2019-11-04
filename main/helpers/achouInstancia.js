export const achouInstancia = callback => (err, instance) => {
  if (err) throw err
  if (instance) {
    return callback(null, true)
  }
  return callback(null, false)
}
