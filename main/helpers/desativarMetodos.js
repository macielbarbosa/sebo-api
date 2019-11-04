export const desativarMetodos = (metodos, modelo) => {
  metodos.forEach(metodo => {
    modelo.disableRemoteMethodByName(metodo)
  })
}
